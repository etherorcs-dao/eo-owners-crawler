/* eslint-disable max-len */
/* eslint-disable no-shadow */
/* eslint-disable no-await-in-loop */
import async from 'async';
import cron from 'node-cron';
import './config.js';
import Big from 'big.js';
import express from 'express';
import {
  EthAlliesContract,
  EthCampaignAContract,
  EthCastleContract,
  EthOrcsContract,
  PolyAlliesContract,
  PolyCampaignAContract,
  PolyOrcsContract,
  PolyDCContract,
} from './contracts.js';
import {
  ETH_ALLIES_CONTRACT_ADDRESS,
  ETH_CASTLE_CONTRACT_ADDRESS,
  ETH_ORCS_CONTRACT_ADDRESS,
  POLY_ALLIES_CONTRACT_ADDRESS,
  POLY_CASTLE_CONTRACT_ADDRESS,
  POLY_CRAFTING_CONTRACT_ADDRESS,
  POLY_DC_CONTRACT_ADDRESS,
  POLY_NEW_FARMING_CONTRACT_ADDRESS,
  POLY_ORCS_CONTRACT_ADDRESS,
} from './constants.js';
import mongoClient from './mongoClient.js';
import { getCraftingInstance, getFarmingSessions, getFarmingConfigs } from './utils.js';

// While bridging poly to eth
// eth
// castle.allyOwner = owner
// allies.ownerOf = eth.castle
//
// poly
// castle.allyOwner = owner
// allies.ownerOf = poly.castle
// allies.activities.ownerOf = 0x0

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
const ORC_GODS = [
  136, 154, 172, 453, 460, 728, 745, 746, 1026, 1054, 1148, 1396, 5050,
];
const ORCS_TOTAL_SUPPLY = 5050;
const SHAMANS_TOTAL_SUPPLY = 3000;
const OGRES_TOTAL_SUPPLY = 3000;
const ROGUES_TOTAL_SUPPLY = 3000;
const PARALLEL = process.env.PARALLEL ?? 100;
const CRON_SCHEDULE = process.env.CRON_SCHEDULE ?? '* * * * *';

const races = [
  {
    type: 'genesis',
    race: 'orc',
    dbCollectionName: 'orcs',
    startId: 1,
    totalSupply: ORCS_TOTAL_SUPPLY,
  },
  {
    type: 'ally',
    race: 'shaman',
    dbCollectionName: 'shamans',
    startId: 5051,
    totalSupply: SHAMANS_TOTAL_SUPPLY,
  },
  {
    type: 'ally',
    race: 'ogre',
    dbCollectionName: 'ogres',
    startId: 8051,
    totalSupply: OGRES_TOTAL_SUPPLY,
  },
  {
    type: 'ally',
    race: 'rogue',
    dbCollectionName: 'rogues',
    startId: 11051,
    totalSupply: ROGUES_TOTAL_SUPPLY,
  },
];

const app = express();
const port = 80;

let polyCampaignAContract;
let ethAlliesContract;
let ethCastleContract;
let polyAlliesContract;
let ethOrcsContract;
let polyOrcsContract;
let ethCampaignAContract;
let polyDCContract;
let farmingSessions;
let farmingConfigs;

async function crawlAllies(allyRace) {
  const startTime = new Date().getTime();
  const { race, startId, totalSupply } = allyRace;
  const allyFarmingConfig = farmingConfigs.find((farmingConfig) => farmingConfig.entityClass === race.toUpperCase());
  const baseFarmingRate = new Big(allyFarmingConfig.ratePerDay).div(1000000000000000000);

  let raceTotalMinted = 0;

  if (race === 'shaman') {
    raceTotalMinted = await ethAlliesContract.methods.shSupply().call();
  } else if (race === 'ogre') {
    raceTotalMinted = await ethAlliesContract.methods.ogSupply().call();
  } else if (race === 'rogue') {
    raceTotalMinted = await ethAlliesContract.methods.rgSupply().call();
  } else {
    console.error('Invalid race');
    process.exit(1);
  }
  raceTotalMinted = parseInt(raceTotalMinted, 10);

  console.log(`Crawling Allies: ${race} (Total Minted ${raceTotalMinted} / Total Supply ${totalSupply})`);

  const allies = await async.timesLimit(
    raceTotalMinted,
    PARALLEL,
    async (i) => {
      const allyNum = startId + i;
      let owner;
      let ethCastleOwner;
      let network = 'ethereum';
      let activities;
      let ally;
      let campaigns;
      let commanders;
      let claimable = new Big(0);
      let tokenURI;
      let inBridge = false;
      let inDC = false;
      try {
        owner = await ethAlliesContract.methods.ownerOf(allyNum).call();

        // Check castleOwner
        if (
          owner?.toLowerCase() === ETH_CASTLE_CONTRACT_ADDRESS.toLowerCase()
        ) {
          ethCastleOwner = await ethCastleContract.methods.allyOwner(allyNum).call();
        }

        if (
          owner?.toLowerCase() === ETH_CASTLE_CONTRACT_ADDRESS.toLowerCase()
        ) {
          network = 'polygon';
          const polyPromises = [
            polyAlliesContract.methods.tokenURI(allyNum),
            polyAlliesContract.methods.ownerOf(allyNum),
            polyAlliesContract.methods.activities(allyNum),
            polyAlliesContract.methods.claimable(allyNum),
            polyCampaignAContract.methods.campaigns(allyNum),
            polyCampaignAContract.methods.commanders(allyNum),
            polyAlliesContract.methods.allies(allyNum),
          ];
          [
            tokenURI, owner, activities, claimable, campaigns, commanders, ally,
          ] = await Promise.all(
            polyPromises.map(async (promise, index) => promise.call().catch((err) => {
              console.log('error', index);
              if (index === 0 && process.env.MAINNET_OR_TESTNET !== 'mainnet') { // tokenURI

              } else {
                throw err;
              }
            })),
          );
        } else {
          const ethPromises = [
            ethAlliesContract.methods.tokenURI(allyNum),
            ethCampaignAContract.methods.campaigns(allyNum),
            ethCampaignAContract.methods.commanders(allyNum),
            ethAlliesContract.methods.allies(allyNum),
          ];
          [tokenURI, campaigns, commanders, ally] = await Promise.all(
            ethPromises.map(async (promise, index) => promise.call().catch((err) => {
              console.log('error', index);
              if (index === 0 && process.env.MAINNET_OR_TESTNET !== 'mainnet') { // tokenURI

              } else {
                throw err;
              }
            })),
          );
        }
      } catch (error) {
        if (
          error
                    && error.message
                    && !error.message.includes('Returned error: execution reverted')
        ) {
          console.error(allyNum, error);
          throw error;
        }
        return;
      }
      // Crawl tokenURI from eth if tokenURI in polygon is empty
      if ((tokenURI === '' || tokenURI === undefined || tokenURI === null) && network === 'polygon') {
        try {
          tokenURI = await ethAlliesContract.methods.tokenURI(allyNum).call();
        } catch (err) {
          // return to avoid tokenURI issues only on mainnet
          if (process.env.MAINNET_OR_TESTNET === 'mainnet') {
            return;
          }
        }
      }
      let parsedMetadata;
      // Bridging
      if (owner?.toLowerCase() === POLY_CASTLE_CONTRACT_ADDRESS.toLowerCase()
                && ethCastleOwner !== undefined) {
        owner = ethCastleOwner;
        inBridge = true;
      }
      // In DC
      if (owner?.toLowerCase() === POLY_DC_CONTRACT_ADDRESS.toLowerCase()) {
        inDC = true;
        try {
          const dcOwner = await polyDCContract.methods.tokenIdToOwner(allyNum).call();
          owner = dcOwner.toLowerCase();
        } catch (error) {
          console.error(error);
        }
      }
      // In New Raids (Crafting)
      if (owner?.toLowerCase() === POLY_CRAFTING_CONTRACT_ADDRESS.toLowerCase()) {
        const craftingInstance = await getCraftingInstance(allyNum);
        if (craftingInstance) {
          owner = craftingInstance.user.id;
        }
        activities.action = 3; // 3 for raiding
      }
      // In New Farming
      const lastFarmingSession = farmingSessions.find((farmingSession) => farmingSession.entity.id === `${allyNum}`); // already sorted desc by startTime
      const isInFarmingContract = owner?.toLowerCase() === POLY_NEW_FARMING_CONTRACT_ADDRESS.toLowerCase();
      if (isInFarmingContract) {
        if (lastFarmingSession) {
          owner = lastFarmingSession.user.id;
        }
        activities.action = 1; // 1 for farming
      }
      let actualOwner = owner;
      try {
        const decodedMetadata = Buffer.from(
          tokenURI.replace('data:application/json;base64,', ''),
          'base64',
        ).toString();
        parsedMetadata = JSON.parse(decodedMetadata);
      } catch (err) {
      }
      if (
        network === 'polygon'
                && activities !== undefined
                && activities !== null
      ) {
        activities.timestamp = parseInt(activities.timestamp, 10);

        // End of legacy farming
        if (parseInt(activities.action, 10) === 1 && Date.now() >= 1667502000000 && !isInFarmingContract) {
          activities.action = 0; // 0 for idle
        } else {
          activities.action = parseInt(activities.action, 10);
        }
        actualOwner = activities.owner === '0x0000000000000000000000000000000000000000'
          ? actualOwner
          : activities.owner;
      }
      if (
        network === 'polygon'
                && commanders !== '0x0000000000000000000000000000000000000000'
      ) {
        // Ally is raiding
        actualOwner = commanders;
      }

      // If actualOwner still unknown, skip
      if (actualOwner === '0x0000000000000000000000000000000000000000') {
        return undefined;
      }

      if (campaigns && parseInt(campaigns.end, 10) !== 0) {
        // Ally is raiding
        activities.action = 3; // 3 for raiding
      }
      if (ally !== undefined) {
        ally.level = parseInt(ally.level, 10);
        ally.lvlProgress = parseInt(ally.lvlProgress, 10);
        ally.modF = parseInt(ally.modF, 10);
        ally.skillCredits = parseInt(ally.skillCredits, 10);
        ally.body = undefined;

        ally.mainhand = undefined;
        ally.offhand = undefined;
        if (race === 'shaman') {
          ally.helm = undefined;
          ally.featA = undefined;
          ally.featB = undefined;
        }
        if (race === 'ogre') {
          ally.armor = undefined;
        }

        let total = new Big(ally.lvlProgress);
        if (activities && activities.action === 2) {
          total = total.plus(claimable);
        }
        const accurateLevel = total.div(1000);
        ally.accurateLevel = accurateLevel.toNumber();

        if (isInFarmingContract && lastFarmingSession) {
          // Calculate claimable (from etherorcs.com)
          const modifier = parseInt(ally.modF, 10) || 0;
          const craftingRate = baseFarmingRate.plus(new Big(modifier).times(0.05));
          const isUsingFarmingPoints = lastFarmingSession.boost > 0;
          const parsedStartTime = parseInt(lastFarmingSession.startTime, 10);
          const claimStartTime = lastFarmingSession.lastClaimedTime || lastFarmingSession.startTime;
          const secondsSinceStart = Math.min(Math.floor(Date.now() / 1000), parsedStartTime + parseInt(allyFarmingConfig.config.maximumTimeFarmingCap, 10)) - parseInt(claimStartTime, 10);
          const daysSinceStart = secondsSinceStart / 86400;
          const totalCraftingRate = craftingRate * (isUsingFarmingPoints ? 1.1 : 0.4);
          claimable = new Big(daysSinceStart * totalCraftingRate).times(1000000000000000000);
        }
      }
      const document = {
        crawledAt: new Date().getTime(),
        activities,
        claimable: claimable === null ? 0 : new Big(claimable).toFixed(8),
        owner:
                    actualOwner === null
                    || actualOwner === undefined
                    || typeof actualOwner !== 'string'
                      ? actualOwner
                      : actualOwner.toLowerCase(),
        allyNum,
        ally,
        inBridge,
        inDC,
        metadata: parsedMetadata,
        campaigns,
        network,
      };
      return document;
    },
  );

  const endTime = new Date().getTime();
  console.log(`Crawled ${allies.length} ${race}s in ${endTime - startTime}ms`);
  return allies;
}

async function crawlOrcs() {
  const startTime = new Date().getTime();
  const orcFarmingConfig = farmingConfigs.find((farmingConfig) => farmingConfig.entityClass === 'ORC');
  const baseFarmingRate = new Big(orcFarmingConfig.ratePerDay).div(1000000000000000000);
  const orcsCurrentTotalSupply = 5050;
  console.log(`Orcs: ${orcsCurrentTotalSupply} / ${ORCS_TOTAL_SUPPLY}`);

  const orcs = await async.timesLimit(
    orcsCurrentTotalSupply,
    PARALLEL,
    async (i) => {
      const orcNum = i + 1;
      let owner;
      let ethCastleOwner;
      let network = 'ethereum';
      let tokenURI;
      let activities;
      let claimable = new Big(0);
      let orc;
      let campaigns;
      let inBridge = false;
      let commanders;
      let inDC = false;
      try {
        owner = await ethOrcsContract.methods.ownerOf(orcNum).call();

        // Check castleOwner
        if (
          owner?.toLowerCase() === ETH_CASTLE_CONTRACT_ADDRESS.toLowerCase()
        ) {
          ethCastleOwner = await ethCastleContract.methods.orcOwner(orcNum).call();
        }

        if (
          owner?.toLowerCase() === ETH_CASTLE_CONTRACT_ADDRESS.toLowerCase()
        ) {
          network = 'polygon';
          [owner, activities, claimable, campaigns, commanders, orc, tokenURI] = await Promise.all(
            [
              polyOrcsContract.methods.ownerOf(orcNum).call(),
              polyOrcsContract.methods.activities(orcNum).call(),
              polyOrcsContract.methods.claimable(orcNum).call(),
              polyCampaignAContract.methods.campaigns(orcNum).call(),
              polyCampaignAContract.methods.commanders(orcNum).call(),
              polyOrcsContract.methods.orcs(orcNum).call(),
              polyOrcsContract.methods.tokenURI(orcNum).call(),
            ].map((p) => p.catch((e) => e)),
          );
        } else {
          // ETHEREUM
          [activities, claimable, campaigns, commanders, tokenURI, orc] = await Promise.all(
            [
              ethOrcsContract.methods.activities(orcNum).call(),
              ethOrcsContract.methods.claimable(orcNum).call(),
              ethCampaignAContract.methods.campaigns(orcNum).call(),
              ethCampaignAContract.methods.commanders(orcNum).call(),
              ethOrcsContract.methods.tokenURI(orcNum).call(),
              ethOrcsContract.methods.orcs(orcNum).call(),
            ].map((p) => p.catch((e) => e)),
          );
        }
      } catch (error) {
        if (
          error
                    && error.message
                    && !error.message.includes('Returned error: execution reverted')
        ) {
          console.error(orcNum, error);
          throw error;
        }
        return;
      }
      let parsedMetadata;
      // Bridging
      if (owner?.toLowerCase() === POLY_CASTLE_CONTRACT_ADDRESS.toLowerCase()
                && ethCastleOwner !== undefined) {
        owner = ethCastleOwner;
        inBridge = true;
      }
      // In DC
      if (owner?.toLowerCase() === POLY_DC_CONTRACT_ADDRESS.toLowerCase()) {
        inDC = true;
        try {
          const dcOwner = await polyDCContract.methods.tokenIdToOwner(orcNum).call();
          owner = dcOwner.toLowerCase();
        } catch (error) {
          console.error(error);
        }
      }
      // In New Raids (Crafting)
      if (owner?.toLowerCase() === POLY_CRAFTING_CONTRACT_ADDRESS.toLowerCase()) {
        const craftingInstance = await getCraftingInstance(orcNum);
        if (craftingInstance) {
          owner = craftingInstance.user.id;
        }
        activities.action = 3; // 3 for raiding
      }
      // In New Farming
      const lastFarmingSession = farmingSessions.find((farmingSession) => farmingSession.entity.id === `${orcNum}`); // already sorted desc by startTime
      const isInFarmingContract = owner?.toLowerCase() === POLY_NEW_FARMING_CONTRACT_ADDRESS.toLowerCase();
      if (isInFarmingContract) {
        if (lastFarmingSession) {
          owner = lastFarmingSession.user.id;
        }
        activities.action = 1; // 1 for farming
      }
      let actualOwner = owner;
      try {
        const decodedMetadata = Buffer.from(
          tokenURI.replace('data:application/json;base64,', ''),
          'base64',
        ).toString();
        parsedMetadata = JSON.parse(decodedMetadata);
      } catch (err) {
      }
      if (activities !== undefined && activities !== null) {
        activities.timestamp = parseInt(activities.timestamp, 10);
        // End of legacy farming
        if (parseInt(activities.action, 10) === 1 && Date.now() >= 1667502000000 && !isInFarmingContract) {
          activities.action = 0; // 0 for idle
        } else {
          activities.action = parseInt(activities.action, 10);
        }
        actualOwner = activities.owner === '0x0000000000000000000000000000000000000000'
          ? actualOwner
          : activities.owner;
      }
      if (commanders !== '0x0000000000000000000000000000000000000000') {
        // Orc is raiding
        actualOwner = commanders;
      }
      if (campaigns && parseInt(campaigns.end, 10) !== 0) {
        // Orc is raiding
        activities.action = 3; // 3 for raiding
      }
      if (orc !== undefined) {
        orc.body = parseInt(orc.body, 10);
        orc.helm = parseInt(orc.helm, 10);
        orc.mainhand = parseInt(orc.mainhand, 10);
        orc.offhand = parseInt(orc.offhand, 10);
        orc.level = parseInt(orc.level, 10);
        orc.zugModifier = parseInt(orc.zugModifier, 10);
        orc.lvlProgress = parseInt(orc.lvlProgress, 10);

        let total = new Big(orc.lvlProgress);
        if (activities && activities.action === 2) {
          total = total.plus(claimable);
        }
        const accurateLevel = total.div(1000);
        orc.accurateLevel = accurateLevel.toNumber();
        let zugPerDay = orc.zugModifier + 4;
        if (isInFarmingContract && lastFarmingSession) {
          const parsedStartTime = parseInt(lastFarmingSession.startTime, 10);
          if (lastFarmingSession.endTime !== null
                        || (orcFarmingConfig && (parsedStartTime + parseInt(orcFarmingConfig.config.maximumTimeFarmingCap, 10)) <= parseInt(Date.now() / 1000, 10))
          ) {
            zugPerDay = 0;
          } else if (lastFarmingSession.boost === '0') {
            zugPerDay = new Big(0.4).times(zugPerDay).toNumber();
          } else {
            zugPerDay = new Big(1).plus(new Big(lastFarmingSession.boost).div(100000)).times(zugPerDay).toNumber();
          }
          // Calculate claimable
          const claimStartTime = lastFarmingSession.lastClaimedTime || lastFarmingSession.startTime;
          const secondsSinceStart = Math.min(Math.floor(Date.now() / 1000), parsedStartTime + parseInt(orcFarmingConfig.config.maximumTimeFarmingCap, 10)) - parseInt(claimStartTime, 10);
          const daysSinceStart = secondsSinceStart / 86400;
          claimable = new Big(daysSinceStart * zugPerDay).times(1000000000000000000);
        }
        orc.zugPerDay = zugPerDay;
      }
      const document = {
        crawledAt: new Date().getTime(),
        activities,
        claimable: claimable === null ? 0 : new Big(claimable).toFixed(8),
        owner:
                    actualOwner === null
                    || actualOwner === undefined
                    || typeof actualOwner !== 'string'
                      ? actualOwner
                      : actualOwner.toLowerCase(),
        orc,
        orcNum,
        metadata: parsedMetadata,
        campaigns,
        inBridge,
        isOrcGod: ORC_GODS.includes(parseInt(orcNum, 10)),
        network,
      };
      return document;
    },
  );

  const endTime = new Date().getTime();
  console.log(`Crawled ${orcs.length} orcs in ${endTime - startTime}ms`);
  return {
    orcs,
    supply: orcsCurrentTotalSupply,
  };
}

let database;

async function fetch() {
  farmingSessions = await getFarmingSessions();
  farmingConfigs = await getFarmingConfigs();
    const orcsCollection = database.collection('orcs');
  console.log('Start cron job');
  if (ETH_ORCS_CONTRACT_ADDRESS !== '' && POLY_ORCS_CONTRACT_ADDRESS !== '') {
    try {
      const assets = await crawlOrcs();
      if (assets?.orcs.length === assets?.supply) { // complete
        console.log(`Persisting ${assets?.orcs.length} orcs to db`);
        const bulkAssets = assets.orcs.map((doc) => ({
          updateOne: {
            filter: { _id: doc.orcNum },
            update: { $set: doc },
            upsert: true,
          },
        }));
        await orcsCollection
          .bulkWrite(bulkAssets)
          .catch((error) => console.error(error));
      }
    } catch (error) {
      console.error(error);
    }
  }
  if (
    ETH_ALLIES_CONTRACT_ADDRESS !== ''
            && POLY_ALLIES_CONTRACT_ADDRESS !== ''
  ) {
    try {
      const allyRaces = races.filter((race) => race.type === 'ally');
      await Promise.all(allyRaces.map(async (allyRace) => {
        const { dbCollectionName, race } = allyRace;
        const assets = await crawlAllies(allyRace).catch((error) => console.error(error));
        const validAssets = assets?.filter((asset) => asset !== undefined);
        console.log(`Total valid ${race}s: ${validAssets?.length}`);
        if (validAssets?.length > 0) {
          const bulkAssets = validAssets.map((doc) => ({
            updateOne: {
              filter: { _id: doc.allyNum },
              update: { $set: doc },
              upsert: true,
            },
          }));
          await database.collection(dbCollectionName)
            .bulkWrite(bulkAssets)
            .catch((error) => console.error(error));
          console.log(`Persisted ${validAssets.length} ${race}s`);
        }
      }));
    } catch (error) {
      console.error(error);
    }
  }
  console.log('End cron job');
}

async function init() {
  await mongoClient.connect();
  database = mongoClient.db(process.env.MONGO_DB);

  polyCampaignAContract = await PolyCampaignAContract();
  ethAlliesContract = await EthAlliesContract();
  ethCastleContract = await EthCastleContract();
  polyAlliesContract = await PolyAlliesContract();
  ethOrcsContract = await EthOrcsContract();
  polyOrcsContract = await PolyOrcsContract();
  ethCampaignAContract = await EthCampaignAContract();
  polyDCContract = await PolyDCContract();
}

export { fetch, init };
