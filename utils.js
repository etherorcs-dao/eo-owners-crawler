/* eslint-disable no-await-in-loop */
import axios from 'axios';
import { DUNGEON_SUBGRAPH_URL } from './constants.js';

// Returns array of
// {
//   "user": {
//     "id": "0xbf59a6e5703fc315873bb12bdc00410eb3fea143"
//   },
//   "entity": {
//     "id": "348"
//   },
//   "amountReceived": null,
//   "startTime": "1665673843"
// },
export async function getFarmingSessions() {
  let result = [];
  let startTime = 0;
  while (true) {
    console.info(`Crawling farming sessions startTime ${startTime}`);
    const response = await axios.post(
      DUNGEON_SUBGRAPH_URL,
      {
        query:
          'query ActiveFarmingSessions($where: ActiveFarmingSession_filter, $orderBy: ActiveFarmingSession_orderBy, $first: Int) {\r\n  activeFarmingSessions(where: $where, orderBy: $orderBy, first: $first) {\r\n    user {\r\n      id\r\n    }\r\n    entity {\r\n      id\r\n    }\r\n    boost\r\n    amountReceived\r\n    endTime\r\n    startTime\r\n  }\r\n}',
        variables: {
          where: {
            startTime_gte: startTime,
          },
          orderBy: 'startTime',
          orderDirection: 'asc',
          first: 1000,
        },
      },
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    );
    if (response.data.data === undefined) {
      break;
    }
    const { activeFarmingSessions } = response.data.data;
    result = [...result, ...activeFarmingSessions];
    if (activeFarmingSessions.length < 1000) {
      break;
    }
    startTime = parseInt(
      activeFarmingSessions[activeFarmingSessions.length - 1].startTime,
      10,
    );
  }
  result.sort((a, b) => parseInt(b.startTime, 10) - parseInt(a.startTime, 10));
  return result;
}

export async function getFarmingConfigs() {
  const response = await axios.post(
    DUNGEON_SUBGRAPH_URL,
    {
      query: 'query Config {\r\n  activeFarmingClassConfigs {\r\n    config {\r\n      minimumTimeForFarming\r\n      maximumTimeFarmingCap\r\n      itemBoosts {\r\n        boost\r\n        amount\r\n      }\r\n    }\r\n    ratePerDay\r\n    entityClass\r\n  }\r\n}',
    },
    {
      headers: {
        'content-type': 'application/json',
      },
    },
  );
  if (response.data.data === undefined) {
    return [];
  }
  const { activeFarmingClassConfigs } = response.data.data;
  return activeFarmingClassConfigs;
}

export async function getCraftingInstance(tokenId) {
  let craftingInstanceResult;
  try {
    craftingInstanceResult = await axios.post(
      DUNGEON_SUBGRAPH_URL,
      {
        query: `query User($where: CraftingInstance_filter) {
            craftingInstances(where: $where) {
              user {
                id
              }
            }
          }`,
        variables: {
          where: {
            status: 'STARTED',
            entity: `${tokenId}`,
          },
        },
      },
      {
        headers: {
          'content-type': 'application/json',
        },
      },
    );
  } catch (err) {
    console.error(err);
    throw new Error('Unable to fetch crafting instance from subgraph.');
  }

  const craftingInstance = craftingInstanceResult.data.data.craftingInstances[0];
  return craftingInstance;
}
