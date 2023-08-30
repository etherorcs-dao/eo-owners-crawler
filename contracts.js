import { web3, web3Poly } from './web3.js';
import {
  ETH_ORCS_CONTRACT_ADDRESS,
  ETH_ORCS_CONTRACT_ABI,
  POLY_ORCS_CONTRACT_ADDRESS,
  POLY_ORCS_CONTRACT_ABI,
  ETH_CAMPAIGN_A_CONTRACT_ADDRESS,
  ETH_CAMPAIGN_A_CONTRACT_ABI,
  POLY_CAMPAIGN_A_CONTRACT_ADDRESS,
  POLY_CAMPAIGN_A_CONTRACT_API,
  ETH_ALLIES_CONTRACT_ABI,
  ETH_ALLIES_CONTRACT_ADDRESS,
  POLY_ALLIES_CONTRACT_ADDRESS,
  POLY_ALLIES_CONTRACT_ABI,
  ETH_CASTLE_CONTRACT_ADDRESS,
  ETH_CASTLE_CONTRACT_ABI,
  POLY_DC_CONTRACT_ABI,
  POLY_DC_CONTRACT_ADDRESS,
} from './constants.js';

export async function EthCampaignAContract() {
  const contract = new web3.eth.Contract(
    ETH_CAMPAIGN_A_CONTRACT_ABI,
    ETH_CAMPAIGN_A_CONTRACT_ADDRESS,
  );
  return contract;
}
export async function EthCastleContract() {
  const contract = new web3.eth.Contract(
    ETH_CASTLE_CONTRACT_ABI,
    ETH_CASTLE_CONTRACT_ADDRESS,
  );
  return contract;
}
export async function PolyCampaignAContract() {
  const contract = new web3Poly.eth.Contract(
    POLY_CAMPAIGN_A_CONTRACT_API,
    POLY_CAMPAIGN_A_CONTRACT_ADDRESS,
  );
  return contract;
}

export async function EthOrcsContract() {
  const contract = new web3.eth.Contract(
    ETH_ORCS_CONTRACT_ABI,
    ETH_ORCS_CONTRACT_ADDRESS,
  );
  return contract;
}

export async function PolyOrcsContract() {
  const contract = new web3Poly.eth.Contract(
    POLY_ORCS_CONTRACT_ABI,
    POLY_ORCS_CONTRACT_ADDRESS,
  );
  return contract;
}

export async function EthAlliesContract() {
  const contract = new web3.eth.Contract(
    ETH_ALLIES_CONTRACT_ABI,
    ETH_ALLIES_CONTRACT_ADDRESS,
  );
  return contract;
}

export async function PolyAlliesContract() {
  const contract = new web3Poly.eth.Contract(
    POLY_ALLIES_CONTRACT_ABI,
    POLY_ALLIES_CONTRACT_ADDRESS,
  );
  return contract;
}

export async function PolyDCContract() {
  const contract = new web3Poly.eth.Contract(
    POLY_DC_CONTRACT_ABI,
    POLY_DC_CONTRACT_ADDRESS,
  );
  return contract;
}
