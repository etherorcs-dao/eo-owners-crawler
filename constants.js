export const ETH_CAMPAIGN_A_CONTRACT_ADDRESS = process.env.ETH_CAMPAIGN_A_CONTRACT_ADDRESS ?? '0x47dc8e20c15f6deaa5cbfeae6cf9946acc89af59';
export const ETH_ORCS_OLD_CONTRACT_ADDRESS = '0x7d9d3659dcfbea08a87777c52020BC672deece13';
export const ETH_ORCS_CONTRACT_ADDRESS = process.env.ETH_ORCS_CONTRACT_ADDRESS ?? '0x3aBEDBA3052845CE3f57818032BFA747CDED3fca';
export const ETH_ALLIES_CONTRACT_ADDRESS = process.env.ETH_ALLIES_CONTRACT_ADDRESS ?? '0x62674b8aCe7D939bB07bea6d32c55b74650e0eaA';
export const ETH_PORTAL_CONTRACT_ADDRESS = process.env.ETH_PORTAL_CONTRACT_ADDRESS ?? '0xE348085162D8fe80e6af99421AB7427166fad326';
export const ETH_ZUG_TOKEN_ADDRESS = process.env.ETH_ZUG_TOKEN_ADDRESS ?? '0xfee5f54e1070e7ed31be341e0a5b1e847f6a84ab';
export const ETH_BONESHARDS_TOKEN_ADDRESS = process.env.ETH_BONESHARDS_TOKEN_ADDRESS ?? '0x6c716bdb4289283e0ad1926c47b54412bd2c257b';
export const ETH_CASTLE_CONTRACT_ADDRESS = process.env.ETH_CASTLE_CONTRACT_ADDRESS ?? '0x2F3f840d17Eb61020680c1f4B00510c3CaA7dF63';

export const POLY_CAMPAIGN_A_CONTRACT_ADDRESS = process.env.POLY_CAMPAIGN_A_CONTRACT_ADDRESS ?? '0x2EeC5C9DfD2a8630fBAa8973357a9ac8393721D4';
export const POLY_ORCS_CONTRACT_ADDRESS = process.env.POLY_ORCS_CONTRACT_ADDRESS ?? '0x84698a8EE5B74eB29385134886b3a182660113e4';
export const POLY_ALLIES_CONTRACT_ADDRESS = process.env.POLY_ALLIES_CONTRACT_ADDRESS ?? '0xbFF91E8592e5Ba6A2a3e035097163A22e8f9113A';
export const POLY_PORTAL_CONTRACT_ADDRESS = process.env.POLY_PORTAL_CONTRACT_ADDRESS ?? '0xE348085162D8fe80e6af99421AB7427166fad326';
export const POLY_ZUG_TOKEN_ADDRESS = process.env.POLY_ZUG_TOKEN_ADDRESS ?? '0xeb45921FEDaDF41dF0BfCF5c33453aCedDA32441';
export const POLY_BONESHARDS_TOKEN_ADDRESS = process.env.POLY_BONESHARDS_TOKEN_ADDRESS ?? '0x62Add2b8Ff6E7a35720A001B40C22588D584FD13';
export const POLY_CASTLE_CONTRACT_ADDRESS = process.env.POLY_CASTLE_CONTRACT_ADDRESS ?? '0xaF8884f29a4421d7CA847895Be4d2edE40eD6ad9';
export const POLY_DC_CONTRACT_ADDRESS = process.env.POLY_DC_CONTRACT_ADDRESS ?? '0x891Be921608A93712C8163B6782BB66B079f63d6';
export const POLY_CRAFTING_CONTRACT_ADDRESS = process.env.POLY_CRAFTING_CONTRACT_ADDRESS ?? '0x393D9DD69bf16Ed3E433078c22f93b297659EfBF';
export const POLY_NEW_FARMING_CONTRACT_ADDRESS = process.env.POLY_NEW_FARMING_CONTRACT_ADDRESS ?? '0x7b246fb2ee61e99b60ad123d2c59c6d311cc94ea';
export const DUNGEON_SUBGRAPH_URL = process.env.DUNGEON_SUBGRAPH_URL ?? 'https://api.thegraph.com/subgraphs/name/vinnytreasure/etherorcssubgraph-prod';

export const POLY_CAMPAIGN_A_CONTRACT_ABI = [{
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'uint256', name: 'orcId', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'damage', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'remainingHealth', type: 'uint256',
  }],
  name: 'BossHit',
  type: 'event',
}, {
  inputs: [], name: 'HND_PCT', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }, { internalType: 'uint16', name: 'minLevel_', type: 'uint16' }, { internalType: 'uint16', name: 'maxLevel_', type: 'uint16' }, { internalType: 'uint16', name: 'duration_', type: 'uint16' }, { internalType: 'uint16', name: 'cost_', type: 'uint16' }, { internalType: 'uint16', name: 'grtAtMin_', type: 'uint16' }, { internalType: 'uint16', name: 'grtAtMax_', type: 'uint16' }, { internalType: 'uint16', name: 'supAtMin_', type: 'uint16' }, { internalType: 'uint16', name: 'supAtMax_', type: 'uint16' }, { internalType: 'uint16', name: 'regReward_', type: 'uint16' }, { internalType: 'uint16', name: 'grtReward_', type: 'uint16' }, { internalType: 'uint16', name: 'supReward_', type: 'uint16' }], name: 'addLocation', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'admin', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'boneShards', outputs: [{ internalType: 'contract ERC20Like', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'campaigns', outputs: [{ internalType: 'uint8', name: 'location', type: 'uint8' }, { internalType: 'bool', name: 'double', type: 'bool' }, { internalType: 'uint64', name: 'end', type: 'uint64' }, { internalType: 'uint176', name: 'reward', type: 'uint176' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }], name: 'claim', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'commanders', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'dbl_discount', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'giantCrabHealth', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'hallOfChampions', outputs: [{ internalType: 'contract HallOfChampionsLike', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'orcs_', type: 'address' }, { internalType: 'address', name: 'zug_', type: 'address' }, { internalType: 'address', name: 'boneShards_', type: 'address' }, { internalType: 'address', name: 'hallOfChampions_', type: 'address' }], name: 'initialize', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'locations', outputs: [{ internalType: 'uint16', name: 'minLevel', type: 'uint16' }, { internalType: 'uint16', name: 'maxLevel', type: 'uint16' }, { internalType: 'uint16', name: 'duration', type: 'uint16' }, { internalType: 'uint16', name: 'cost', type: 'uint16' }, { internalType: 'uint16', name: 'grtAtMin', type: 'uint16' }, { internalType: 'uint16', name: 'grtAtMax', type: 'uint16' }, { internalType: 'uint16', name: 'supAtMin', type: 'uint16' }, { internalType: 'uint16', name: 'supAtMax', type: 'uint16' }, { internalType: 'uint16', name: 'regReward', type: 'uint16' }, { internalType: 'uint16', name: 'grtReward', type: 'uint16' }, { internalType: 'uint16', name: 'supReward', type: 'uint16' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'orcs', outputs: [{ internalType: 'contract ERC721Like', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids_', type: 'uint256[]' }, { internalType: 'address', name: 'owner_', type: 'address' }, { internalType: 'uint256', name: 'location_', type: 'uint256' }, { internalType: 'bool', name: 'double_', type: 'bool' }], name: 'stakeManyAndStartCampaign', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'uint256', name: 'location_', type: 'uint256' }, { internalType: 'bool', name: 'double_', type: 'bool' }], name: 'startCampaignWithMany', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'orcId', type: 'uint256' }], name: 'unstake', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'zug', outputs: [{ internalType: 'contract ERC20Like', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}];

export const ETH_CAMPAIGN_A_CONTRACT_ABI = [{
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'uint256', name: 'orcId', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'damage', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'remainingHealth', type: 'uint256',
  }],
  name: 'BossHit',
  type: 'event',
}, {
  inputs: [], name: 'HND_PCT', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }, { internalType: 'uint16', name: 'minLevel_', type: 'uint16' }, { internalType: 'uint16', name: 'maxLevel_', type: 'uint16' }, { internalType: 'uint16', name: 'duration_', type: 'uint16' }, { internalType: 'uint16', name: 'cost_', type: 'uint16' }, { internalType: 'uint16', name: 'grtAtMin_', type: 'uint16' }, { internalType: 'uint16', name: 'grtAtMax_', type: 'uint16' }, { internalType: 'uint16', name: 'supAtMin_', type: 'uint16' }, { internalType: 'uint16', name: 'supAtMax_', type: 'uint16' }, { internalType: 'uint16', name: 'regReward_', type: 'uint16' }, { internalType: 'uint16', name: 'grtReward_', type: 'uint16' }, { internalType: 'uint16', name: 'supReward_', type: 'uint16' }], name: 'addLocation', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'admin', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'boneShards', outputs: [{ internalType: 'contract ERC20Like', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'campaigns', outputs: [{ internalType: 'uint8', name: 'location', type: 'uint8' }, { internalType: 'bool', name: 'double', type: 'bool' }, { internalType: 'uint64', name: 'end', type: 'uint64' }, { internalType: 'uint176', name: 'reward', type: 'uint176' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }], name: 'claim', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'commanders', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'dbl_discount', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'giantCrabHealth', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'hallOfChampions', outputs: [{ internalType: 'contract HallOfChampionsLike', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'orcs_', type: 'address' }, { internalType: 'address', name: 'zug_', type: 'address' }, { internalType: 'address', name: 'boneShards_', type: 'address' }, { internalType: 'address', name: 'hallOfChampions_', type: 'address' }], name: 'initializer', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'locations', outputs: [{ internalType: 'uint16', name: 'minLevel', type: 'uint16' }, { internalType: 'uint16', name: 'maxLevel', type: 'uint16' }, { internalType: 'uint16', name: 'duration', type: 'uint16' }, { internalType: 'uint16', name: 'cost', type: 'uint16' }, { internalType: 'uint16', name: 'grtAtMin', type: 'uint16' }, { internalType: 'uint16', name: 'grtAtMax', type: 'uint16' }, { internalType: 'uint16', name: 'supAtMin', type: 'uint16' }, { internalType: 'uint16', name: 'supAtMax', type: 'uint16' }, { internalType: 'uint16', name: 'regReward', type: 'uint16' }, { internalType: 'uint16', name: 'grtReward', type: 'uint16' }, { internalType: 'uint16', name: 'supReward', type: 'uint16' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'orcs', outputs: [{ internalType: 'contract ERC721Like', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids_', type: 'uint256[]' }, { internalType: 'address', name: 'owner_', type: 'address' }, { internalType: 'uint256', name: 'location_', type: 'uint256' }, { internalType: 'bool', name: 'double_', type: 'bool' }], name: 'stakeManyAndStartCampaign', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'uint256', name: 'location_', type: 'uint256' }, { internalType: 'bool', name: 'double_', type: 'bool' }], name: 'startCampaignWithMany', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'orcId', type: 'uint256' }], name: 'unstake', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'zug', outputs: [{ internalType: 'contract ERC20Like', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}];

export const ETH_HALL_CONTRACT_ABI = [{ inputs: [{ internalType: 'address', name: 'zug_', type: 'address' }, { internalType: 'address', name: 'etherOrcs_', type: 'address' }], stateMutability: 'nonpayable', type: 'constructor' }, {
  inputs: [], name: 'admin', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'orcId', type: 'uint256' }, { internalType: 'string', name: 'firstName_', type: 'string' }, { internalType: 'string', name: 'lastName_', type: 'string' }], name: 'changeName', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'etherOrcs', outputs: [{ internalType: 'contract EtherOrcLike', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'getAllChampions', outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'getChampions', outputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'uint256[]', name: 'timeSinceJoined', type: 'uint256[]' }, { internalType: 'string[]', name: 'names', type: 'string[]' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'orcId', type: 'uint256' }], name: 'getName', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'getTopFive', outputs: [{ internalType: 'uint256[5]', name: '', type: 'uint256[5]' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'isTopFive', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'joined', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'namingCost', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'orcId', type: 'uint256' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'payTribute', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'newCost', type: 'uint256' }], name: 'setNamingCost', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }], name: 'timeAsChampion', outputs: [{ internalType: 'uint256', name: 'timeInSeconds', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'timeAtTop', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'topEnterTime', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'tributes', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'string', name: 'str', type: 'string' }], name: 'validateName', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'pure', type: 'function',
}, {
  inputs: [], name: 'zug', outputs: [{ internalType: 'contract ERC20Like', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}];
export const ETH_TOKEN_CONTRACT_ABI = [{ inputs: [], stateMutability: 'nonpayable', type: 'constructor' }, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'owner', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'spender', type: 'address',
  }, {
    indexed: false, internalType: 'uint256', name: 'value', type: 'uint256',
  }],
  name: 'Approval',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'from', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'to', type: 'address',
  }, {
    indexed: false, internalType: 'uint256', name: 'value', type: 'uint256',
  }],
  name: 'Transfer',
  type: 'event',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'address', name: '', type: 'address' }], name: 'allowance', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, { internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'approve', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'balanceOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'from', type: 'address' }, { internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'burn', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'decimals', outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'isMinter', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'mint', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'ruler', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'minter', type: 'address' }, { internalType: 'bool', name: 'status', type: 'bool' }], name: 'setMinter', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'ruler_', type: 'address' }], name: 'setRuler', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'transfer', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'from', type: 'address' }, { internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'value', type: 'uint256' }], name: 'transferFrom', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'nonpayable', type: 'function',
}];
export const ETH_ORCS_CONTRACT_ABI = [{
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'address', name: 'owner', type: 'address',
  }, {
    indexed: false, internalType: 'uint256', name: 'id', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'timestamp', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint8', name: 'activity', type: 'uint8',
  }],
  name: 'ActionMade',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'owner', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'spender', type: 'address',
  }, {
    indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256',
  }],
  name: 'Approval',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'owner', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'operator', type: 'address',
  }, {
    indexed: false, internalType: 'bool', name: 'approved', type: 'bool',
  }],
  name: 'ApprovalForAll',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'from', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'to', type: 'address',
  }, {
    indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256',
  }],
  name: 'Transfer',
  type: 'event',
}, { stateMutability: 'nonpayable', type: 'fallback' }, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'activities', outputs: [{ internalType: 'address', name: 'owner', type: 'address' }, { internalType: 'uint88', name: 'timestamp', type: 'uint88' }, { internalType: 'enum EtherOrcs.Actions', name: 'action', type: 'uint8' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'admin', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'approve', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'auth', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'balanceOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }], name: 'claim', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }], name: 'claimable', outputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'cooldown', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }, { internalType: 'enum EtherOrcs.Actions', name: 'action_', type: 'uint8' }], name: 'doAction', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'enum EtherOrcs.Actions', name: 'action_', type: 'uint8' }], name: 'doActionWithManyOrcs', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'getApproved', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'address', name: '', type: 'address' }], name: 'isApprovedForAll', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'enum EtherOrcs.Places', name: '', type: 'uint8' }], name: 'lootPools', outputs: [{ internalType: 'uint8', name: 'minLevel', type: 'uint8' }, { internalType: 'uint8', name: 'minLootTier', type: 'uint8' }, { internalType: 'uint16', name: 'cost', type: 'uint16' }, { internalType: 'uint16', name: 'total', type: 'uint16' }, { internalType: 'uint16', name: 'tier_1', type: 'uint16' }, { internalType: 'uint16', name: 'tier_2', type: 'uint16' }, { internalType: 'uint16', name: 'tier_3', type: 'uint16' }, { internalType: 'uint16', name: 'tier_4', type: 'uint16' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'migrator', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'minted', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'oldSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'orcs', outputs: [{ internalType: 'uint8', name: 'body', type: 'uint8' }, { internalType: 'uint8', name: 'helm', type: 'uint8' }, { internalType: 'uint8', name: 'mainhand', type: 'uint8' }, { internalType: 'uint8', name: 'offhand', type: 'uint8' }, { internalType: 'uint16', name: 'level', type: 'uint16' }, { internalType: 'uint16', name: 'zugModifier', type: 'uint16' }, { internalType: 'uint32', name: 'lvlProgress', type: 'uint32' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'ownerOf', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }, { internalType: 'enum EtherOrcs.Places', name: 'place', type: 'uint8' }, { internalType: 'bool', name: 'tryHelm', type: 'bool' }, { internalType: 'bool', name: 'tryMainhand', type: 'bool' }, { internalType: 'bool', name: 'tryOffhand', type: 'bool' }], name: 'pillage', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'enum EtherOrcs.Places', name: 'place', type: 'uint8' }, { internalType: 'bool', name: 'tryHelm', type: 'bool' }, { internalType: 'bool', name: 'tryMainhand', type: 'bool' }, { internalType: 'bool', name: 'tryOffhand', type: 'bool' }], name: 'pillageWithManyOrcs', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'raids', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'enum EtherOrcs.Actions', name: 'action_', type: 'uint8' }], name: 'returnFromRaid', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'safeTransferFrom', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }, { internalType: 'bytes', name: 'data', type: 'bytes' }], name: 'safeTransferFrom', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'uint8', name: 'location_', type: 'uint8' }, { internalType: 'bool', name: 'double_', type: 'bool' }], name: 'sendToRaid', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'operator', type: 'address' }, { internalType: 'bool', name: 'approved', type: 'bool' }], name: 'setApprovalForAll', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'bytes4[]', name: 'funcs', type: 'bytes4[]' }, { internalType: 'address', name: 'source', type: 'address' }], name: 'setImplementer', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'uint8', name: 'location_', type: 'uint8' }, { internalType: 'bool', name: 'double_', type: 'bool' }], name: 'startRaidCampaign', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'startingTime', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }], name: 'supportsInterface', outputs: [{ internalType: 'bool', name: 'supported', type: 'bool' }], stateMutability: 'pure', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }], name: 'tokenURI', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'transfer', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'transferFrom', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'zug', outputs: [{ internalType: 'contract ERC20', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}];
export const ETH_ORCS_OLD_CONTRACT_ABI = [{ inputs: [], stateMutability: 'nonpayable', type: 'constructor' }, {
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'address', name: 'owner', type: 'address',
  }, {
    indexed: false, internalType: 'uint256', name: 'id', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'timestamp', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint8', name: 'activity', type: 'uint8',
  }],
  name: 'ActionMade',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'owner', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'spender', type: 'address',
  }, {
    indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256',
  }],
  name: 'Approval',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'owner', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'operator', type: 'address',
  }, {
    indexed: false, internalType: 'bool', name: 'approved', type: 'bool',
  }],
  name: 'ApprovalForAll',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'from', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'to', type: 'address',
  }, {
    indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256',
  }],
  name: 'Transfer',
  type: 'event',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'activities', outputs: [{ internalType: 'address', name: 'owner', type: 'address' }, { internalType: 'uint88', name: 'timestamp', type: 'uint88' }, { internalType: 'enum EtherOrcs.Actions', name: 'action', type: 'uint8' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'approve', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'balanceOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }], name: 'claim', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }], name: 'claimable', outputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'cooldown', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }, { internalType: 'enum EtherOrcs.Actions', name: 'action_', type: 'uint8' }], name: 'doAction', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'enum EtherOrcs.Actions', name: 'action_', type: 'uint8' }], name: 'doActionWithManyOrcs', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'getApproved', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'address', name: '', type: 'address' }], name: 'isApprovedForAll', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'enum EtherOrcs.Places', name: '', type: 'uint8' }], name: 'lootPools', outputs: [{ internalType: 'uint8', name: 'minLevel', type: 'uint8' }, { internalType: 'uint8', name: 'minLootTier', type: 'uint8' }, { internalType: 'uint16', name: 'cost', type: 'uint16' }, { internalType: 'uint16', name: 'total', type: 'uint16' }, { internalType: 'uint16', name: 'tier_1', type: 'uint16' }, { internalType: 'uint16', name: 'tier_2', type: 'uint16' }, { internalType: 'uint16', name: 'tier_3', type: 'uint16' }, { internalType: 'uint16', name: 'tier_4', type: 'uint16' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'mint', outputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'mintingTime', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'orcs', outputs: [{ internalType: 'uint8', name: 'body', type: 'uint8' }, { internalType: 'uint8', name: 'helm', type: 'uint8' }, { internalType: 'uint8', name: 'mainhand', type: 'uint8' }, { internalType: 'uint8', name: 'offhand', type: 'uint8' }, { internalType: 'uint16', name: 'level', type: 'uint16' }, { internalType: 'uint16', name: 'zugModifier', type: 'uint16' }, { internalType: 'uint32', name: 'lvlProgress', type: 'uint32' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'ownerOf', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }, { internalType: 'enum EtherOrcs.Places', name: 'place', type: 'uint8' }, { internalType: 'bool', name: 'tryHelm', type: 'bool' }, { internalType: 'bool', name: 'tryMainhand', type: 'bool' }, { internalType: 'bool', name: 'tryOffhand', type: 'bool' }], name: 'pillage', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'safeTransferFrom', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }, { internalType: 'bytes', name: 'data', type: 'bytes' }], name: 'safeTransferFrom', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'meta', type: 'address' }, { internalType: 'address', name: 'list_', type: 'address' }], name: 'setAddresses', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'operator', type: 'address' }, { internalType: 'bool', name: 'approved', type: 'bool' }], name: 'setApprovalForAll', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'startingTime', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }], name: 'supportsInterface', outputs: [{ internalType: 'bool', name: 'supported', type: 'bool' }], stateMutability: 'pure', type: 'function',
}, {
  inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }], name: 'tokenURI', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'transfer', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'transferFrom', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }], name: 'update', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'zug', outputs: [{ internalType: 'contract ERC20', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}];

export const POLY_ORCS_CONTRACT_ABI = [{
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'address', name: 'owner', type: 'address',
  }, {
    indexed: false, internalType: 'uint256', name: 'id', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'timestamp', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint8', name: 'activity', type: 'uint8',
  }],
  name: 'ActionMade',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'owner', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'spender', type: 'address',
  }, {
    indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256',
  }],
  name: 'Approval',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'owner', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'operator', type: 'address',
  }, {
    indexed: false, internalType: 'bool', name: 'approved', type: 'bool',
  }],
  name: 'ApprovalForAll',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'from', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'to', type: 'address',
  }, {
    indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256',
  }],
  name: 'Transfer',
  type: 'event',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'activities', outputs: [{ internalType: 'address', name: 'owner', type: 'address' }, { internalType: 'uint88', name: 'timestamp', type: 'uint88' }, { internalType: 'enum EtherOrcsPoly.Actions', name: 'action', type: 'uint8' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'addLootPools', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'admin', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'auth', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'balanceOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }], name: 'claim', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }], name: 'claimable', outputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'cooldown', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }, { internalType: 'enum EtherOrcsPoly.Actions', name: 'action_', type: 'uint8' }], name: 'doAction', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'enum EtherOrcsPoly.Actions', name: 'action_', type: 'uint8' }], name: 'doActionWithManyOrcs', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'getApproved', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'start', type: 'uint256' }, { internalType: 'uint256', name: 'end', type: 'uint256' }], name: 'initMint', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'address', name: '', type: 'address' }], name: 'isApprovedForAll', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'enum EtherOrcsPoly.Places', name: '', type: 'uint8' }], name: 'lootPools', outputs: [{ internalType: 'uint8', name: 'minLevel', type: 'uint8' }, { internalType: 'uint8', name: 'minLootTier', type: 'uint8' }, { internalType: 'uint16', name: 'cost', type: 'uint16' }, { internalType: 'uint16', name: 'total', type: 'uint16' }, { internalType: 'uint16', name: 'tier_1', type: 'uint16' }, { internalType: 'uint16', name: 'tier_2', type: 'uint16' }, { internalType: 'uint16', name: 'tier_3', type: 'uint16' }, { internalType: 'uint16', name: 'tier_4', type: 'uint16' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }, { internalType: 'uint8', name: 'body', type: 'uint8' }, { internalType: 'uint8', name: 'helm', type: 'uint8' }, { internalType: 'uint8', name: 'mainhand', type: 'uint8' }, { internalType: 'uint8', name: 'offhand', type: 'uint8' }, { internalType: 'uint16', name: 'level', type: 'uint16' }, { internalType: 'uint16', name: 'zugModifier', type: 'uint16' }, { internalType: 'uint32', name: 'lvlProgress', type: 'uint32' }], name: 'manuallyAdjustOrc', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'migrator', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'minted', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'oldSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'orcs', outputs: [{ internalType: 'uint8', name: 'body', type: 'uint8' }, { internalType: 'uint8', name: 'helm', type: 'uint8' }, { internalType: 'uint8', name: 'mainhand', type: 'uint8' }, { internalType: 'uint8', name: 'offhand', type: 'uint8' }, { internalType: 'uint16', name: 'level', type: 'uint16' }, { internalType: 'uint16', name: 'zugModifier', type: 'uint16' }, { internalType: 'uint32', name: 'lvlProgress', type: 'uint32' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'ownerOf', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }, { internalType: 'enum EtherOrcsPoly.Places', name: 'place', type: 'uint8' }, { internalType: 'bool', name: 'tryHelm', type: 'bool' }, { internalType: 'bool', name: 'tryMainhand', type: 'bool' }, { internalType: 'bool', name: 'tryOffhand', type: 'bool' }], name: 'pillage', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'enum EtherOrcsPoly.Places', name: 'place', type: 'uint8' }, { internalType: 'bool', name: 'tryHelm', type: 'bool' }, { internalType: 'bool', name: 'tryMainhand', type: 'bool' }, { internalType: 'bool', name: 'tryOffhand', type: 'bool' }], name: 'pillageWithManyOrcs', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'owner_', type: 'address' }, { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }], name: 'pull', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'raids', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'enum EtherOrcsPoly.Actions', name: 'action_', type: 'uint8' }], name: 'returnFromRaid', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'uint8', name: 'location_', type: 'uint8' }, { internalType: 'bool', name: 'double_', type: 'bool' }], name: 'sendToRaid', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'add', type: 'address' }, { internalType: 'bool', name: 'status', type: 'bool' }], name: 'setAuth', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'c_', type: 'address' }], name: 'setCastle', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'bytes4[]', name: 'funcs', type: 'bytes4[]' }, { internalType: 'address', name: 'source', type: 'address' }], name: 'setImplementer', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'add', type: 'address' }], name: 'setMetadataHandler', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'r_', type: 'address' }], name: 'setRaids', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'z_', type: 'address' }], name: 'setZug', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'uint8', name: 'location_', type: 'uint8' }, { internalType: 'bool', name: 'double_', type: 'bool' }], name: 'startRaidCampaign', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'startingTime', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }], name: 'supportsInterface', outputs: [{ internalType: 'bool', name: 'supported', type: 'bool' }], stateMutability: 'pure', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }], name: 'tokenURI', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'transfer', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'zug', outputs: [{ internalType: 'contract ERC20', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}];

export const POLY_CAMPAIGN_A_CONTRACT_API = [{
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'uint256', name: 'orcId', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'damage', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'remainingHealth', type: 'uint256',
  }],
  name: 'BossHit',
  type: 'event',
}, {
  inputs: [], name: 'HND_PCT', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }, { internalType: 'uint16', name: 'minLevel_', type: 'uint16' }, { internalType: 'uint16', name: 'maxLevel_', type: 'uint16' }, { internalType: 'uint16', name: 'duration_', type: 'uint16' }, { internalType: 'uint16', name: 'cost_', type: 'uint16' }, { internalType: 'uint16', name: 'grtAtMin_', type: 'uint16' }, { internalType: 'uint16', name: 'grtAtMax_', type: 'uint16' }, { internalType: 'uint16', name: 'supAtMin_', type: 'uint16' }, { internalType: 'uint16', name: 'supAtMax_', type: 'uint16' }, { internalType: 'uint16', name: 'regReward_', type: 'uint16' }, { internalType: 'uint16', name: 'grtReward_', type: 'uint16' }, { internalType: 'uint16', name: 'supReward_', type: 'uint16' }], name: 'addLocation', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'admin', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'boneShards', outputs: [{ internalType: 'contract ERC20Like', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'campaigns', outputs: [{ internalType: 'uint8', name: 'location', type: 'uint8' }, { internalType: 'bool', name: 'double', type: 'bool' }, { internalType: 'uint64', name: 'end', type: 'uint64' }, { internalType: 'uint176', name: 'reward', type: 'uint176' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }], name: 'claim', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'commanders', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'dbl_discount', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'giantCrabHealth', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'hallOfChampions', outputs: [{ internalType: 'contract HallOfChampionsLike', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'orcs_', type: 'address' }, { internalType: 'address', name: 'zug_', type: 'address' }, { internalType: 'address', name: 'boneShards_', type: 'address' }, { internalType: 'address', name: 'hallOfChampions_', type: 'address' }], name: 'initialize', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'locations', outputs: [{ internalType: 'uint16', name: 'minLevel', type: 'uint16' }, { internalType: 'uint16', name: 'maxLevel', type: 'uint16' }, { internalType: 'uint16', name: 'duration', type: 'uint16' }, { internalType: 'uint16', name: 'cost', type: 'uint16' }, { internalType: 'uint16', name: 'grtAtMin', type: 'uint16' }, { internalType: 'uint16', name: 'grtAtMax', type: 'uint16' }, { internalType: 'uint16', name: 'supAtMin', type: 'uint16' }, { internalType: 'uint16', name: 'supAtMax', type: 'uint16' }, { internalType: 'uint16', name: 'regReward', type: 'uint16' }, { internalType: 'uint16', name: 'grtReward', type: 'uint16' }, { internalType: 'uint16', name: 'supReward', type: 'uint16' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'orcs', outputs: [{ internalType: 'contract ERC721Like', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids_', type: 'uint256[]' }, { internalType: 'address', name: 'owner_', type: 'address' }, { internalType: 'uint256', name: 'location_', type: 'uint256' }, { internalType: 'bool', name: 'double_', type: 'bool' }], name: 'stakeManyAndStartCampaign', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'uint256', name: 'location_', type: 'uint256' }, { internalType: 'bool', name: 'double_', type: 'bool' }], name: 'startCampaignWithMany', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'orcId', type: 'uint256' }], name: 'unstake', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'zug', outputs: [{ internalType: 'contract ERC20Like', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}];

export const ETH_ALLIES_CONTRACT_ABI = [{
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'owner', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'spender', type: 'address',
  }, {
    indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256',
  }],
  name: 'Approval',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'owner', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'operator', type: 'address',
  }, {
    indexed: false, internalType: 'bool', name: 'approved', type: 'bool',
  }],
  name: 'ApprovalForAll',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'from', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'to', type: 'address',
  }, {
    indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256',
  }],
  name: 'Transfer',
  type: 'event',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }, { internalType: 'uint8', name: 'class_', type: 'uint8' }, { internalType: 'uint16', name: 'level_', type: 'uint16' }, { internalType: 'uint32', name: 'lvlProgress_', type: 'uint32' }, { internalType: 'uint16', name: 'modF_', type: 'uint16' }, { internalType: 'uint8', name: 'skillCredits_', type: 'uint8' }, { internalType: 'bytes22', name: 'details_', type: 'bytes22' }], name: 'adjustAlly', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'admin', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'allies', outputs: [{ internalType: 'uint8', name: 'class', type: 'uint8' }, { internalType: 'uint16', name: 'level', type: 'uint16' }, { internalType: 'uint32', name: 'lvlProgress', type: 'uint32' }, { internalType: 'uint16', name: 'modF', type: 'uint16' }, { internalType: 'uint8', name: 'skillCredits', type: 'uint8' }, { internalType: 'bytes22', name: 'details', type: 'bytes22' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'spender', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'approve', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'auth', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'balanceOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'castle', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'getApproved', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'ct', type: 'address' }, { internalType: 'address', name: 'bs', type: 'address' }, { internalType: 'address', name: 'meta', type: 'address' }], name: 'initialize', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'address', name: '', type: 'address' }], name: 'isApprovedForAll', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'mgSupply', outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'mintOgre', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'mintOgres', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'mintShaman', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'mintShamans', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'ogSupply', outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }], name: 'ogres', outputs: [{ internalType: 'uint16', name: 'level', type: 'uint16' }, { internalType: 'uint32', name: 'lvlProgress', type: 'uint32' }, { internalType: 'uint16', name: 'modF', type: 'uint16' }, { internalType: 'uint8', name: 'skillCredits', type: 'uint8' }, { internalType: 'uint8', name: 'body', type: 'uint8' }, { internalType: 'uint8', name: 'mouth', type: 'uint8' }, { internalType: 'uint8', name: 'nose', type: 'uint8' }, { internalType: 'uint8', name: 'eyes', type: 'uint8' }, { internalType: 'uint8', name: 'armor', type: 'uint8' }, { internalType: 'uint8', name: 'mainhand', type: 'uint8' }, { internalType: 'uint8', name: 'offhand', type: 'uint8' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'openForMint', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'ownerOf', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'owner_', type: 'address' }, { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }], name: 'pull', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'rgSupply', outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'from', type: 'address' }, { internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'safeTransferFrom', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'from', type: 'address' }, { internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }, { internalType: 'bytes', name: 'data', type: 'bytes' }], name: 'safeTransferFrom', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'operator', type: 'address' }, { internalType: 'bool', name: 'approved', type: 'bool' }], name: 'setApprovalForAll', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'add_', type: 'address' }, { internalType: 'bool', name: 'status', type: 'bool' }], name: 'setAuth', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'bool', name: 'open_', type: 'bool' }], name: 'setMintOpen', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'shSupply', outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }], name: 'shamans', outputs: [{ internalType: 'uint16', name: 'level', type: 'uint16' }, { internalType: 'uint32', name: 'lvlProgress', type: 'uint32' }, { internalType: 'uint16', name: 'modF', type: 'uint16' }, { internalType: 'uint8', name: 'skillCredits', type: 'uint8' }, { internalType: 'uint8', name: 'body', type: 'uint8' }, { internalType: 'uint8', name: 'featA', type: 'uint8' }, { internalType: 'uint8', name: 'featB', type: 'uint8' }, { internalType: 'uint8', name: 'helm', type: 'uint8' }, { internalType: 'uint8', name: 'mainhand', type: 'uint8' }, { internalType: 'uint8', name: 'offhand', type: 'uint8' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }], name: 'supportsInterface', outputs: [{ internalType: 'bool', name: 'supported', type: 'bool' }], stateMutability: 'pure', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }], name: 'tokenURI', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'transfer', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'from', type: 'address' }, { internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'transferFrom', outputs: [], stateMutability: 'nonpayable', type: 'function',
}];

export const POLY_ALLIES_CONTRACT_ABI = [{
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'address', name: 'owner', type: 'address',
  }, {
    indexed: false, internalType: 'uint256', name: 'id', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: 'timestamp', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint8', name: 'activity', type: 'uint8',
  }],
  name: 'ActionMade',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'owner', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'spender', type: 'address',
  }, {
    indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256',
  }],
  name: 'Approval',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'owner', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'operator', type: 'address',
  }, {
    indexed: false, internalType: 'bool', name: 'approved', type: 'bool',
  }],
  name: 'ApprovalForAll',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: 'from', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'to', type: 'address',
  }, {
    indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256',
  }],
  name: 'Transfer',
  type: 'event',
}, {
  inputs: [], name: 'DUMMY_ID', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'POTION_ID', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'activities', outputs: [{ internalType: 'address', name: 'owner', type: 'address' }, { internalType: 'uint88', name: 'timestamp', type: 'uint88' }, { internalType: 'uint8', name: 'action', type: 'uint8' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }, { internalType: 'uint8', name: 'class_', type: 'uint8' }, { internalType: 'uint16', name: 'level_', type: 'uint16' }, { internalType: 'uint32', name: 'lvlProgress_', type: 'uint32' }, { internalType: 'uint16', name: 'modF_', type: 'uint16' }, { internalType: 'uint8', name: 'skillCredits_', type: 'uint8' }, { internalType: 'bytes22', name: 'details_', type: 'bytes22' }], name: 'adjustAlly', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'admin', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'adventures', outputs: [{ internalType: 'uint64', name: 'seed', type: 'uint64' }, { internalType: 'uint64', name: 'location', type: 'uint64' }, { internalType: 'uint64', name: 'equipment', type: 'uint64' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'allies', outputs: [{ internalType: 'uint8', name: 'class', type: 'uint8' }, { internalType: 'uint16', name: 'level', type: 'uint16' }, { internalType: 'uint32', name: 'lvlProgress', type: 'uint32' }, { internalType: 'uint16', name: 'modF', type: 'uint16' }, { internalType: 'uint8', name: 'skillCredits', type: 'uint8' }, { internalType: 'bytes22', name: 'details', type: 'bytes22' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'auth', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'balanceOf', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }], name: 'claim', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }], name: 'claimable', outputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }, { internalType: 'uint8', name: 'action_', type: 'uint8' }], name: 'doAction', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'uint8', name: 'action_', type: 'uint8' }], name: 'doActionWithManyAllies', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }], name: 'endAdventure', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }], name: 'endAdventureWithMany', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'getApproved', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'start', type: 'uint256' }, { internalType: 'uint256', name: 'end', type: 'uint256' }], name: 'initMint', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'zug_', type: 'address' }, { internalType: 'address', name: 'shr_', type: 'address' }, { internalType: 'address', name: 'potions_', type: 'address' }, { internalType: 'address', name: 'raids_', type: 'address' }, { internalType: 'address', name: 'castle_', type: 'address' }, { internalType: 'address', name: 'gamingOracle_', type: 'address' }], name: 'initialize', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'address', name: '', type: 'address' }], name: 'isApprovedForAll', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'locations', outputs: [{ internalType: 'uint8', name: 'minLevel', type: 'uint8' }, { internalType: 'uint8', name: 'skillCost', type: 'uint8' }, { internalType: 'uint16', name: 'cost', type: 'uint16' }, { internalType: 'uint8', name: 'classAllowed', type: 'uint8' }, { internalType: 'uint8', name: 'tier_1Prob', type: 'uint8' }, { internalType: 'uint8', name: 'tier_2Prob', type: 'uint8' }, { internalType: 'uint8', name: 'tier_3Prob', type: 'uint8' }, { internalType: 'uint8', name: 'tier_1', type: 'uint8' }, { internalType: 'uint8', name: 'tier_2', type: 'uint8' }, { internalType: 'uint8', name: 'tier_3', type: 'uint8' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'minted', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }], name: 'ogres', outputs: [{ internalType: 'uint16', name: 'level', type: 'uint16' }, { internalType: 'uint32', name: 'lvlProgress', type: 'uint32' }, { internalType: 'uint16', name: 'modF', type: 'uint16' }, { internalType: 'uint8', name: 'skillCredits', type: 'uint8' }, { internalType: 'uint8', name: 'body', type: 'uint8' }, { internalType: 'uint8', name: 'mouth', type: 'uint8' }, { internalType: 'uint8', name: 'nose', type: 'uint8' }, { internalType: 'uint8', name: 'eyes', type: 'uint8' }, { internalType: 'uint8', name: 'armor', type: 'uint8' }, { internalType: 'uint8', name: 'mainhand', type: 'uint8' }, { internalType: 'uint8', name: 'offhand', type: 'uint8' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'oldSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'ownerOf', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'owner_', type: 'address' }, { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }], name: 'pull', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'uint8', name: 'action_', type: 'uint8' }], name: 'returnFromRaid', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'uint8', name: 'location_', type: 'uint8' }, { internalType: 'bool', name: 'double_', type: 'bool' }, { internalType: 'uint256[]', name: 'potions_', type: 'uint256[]' }], name: 'sendToRaid', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'add_', type: 'address' }, { internalType: 'bool', name: 'status', type: 'bool' }], name: 'setAuth', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'setLocations', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'add', type: 'address' }], name: 'setMetadataHandler', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }], name: 'shamans', outputs: [{ internalType: 'uint16', name: 'level', type: 'uint16' }, { internalType: 'uint32', name: 'lvlProgress', type: 'uint32' }, { internalType: 'uint16', name: 'modF', type: 'uint16' }, { internalType: 'uint8', name: 'skillCredits', type: 'uint8' }, { internalType: 'uint8', name: 'body', type: 'uint8' }, { internalType: 'uint8', name: 'featA', type: 'uint8' }, { internalType: 'uint8', name: 'featB', type: 'uint8' }, { internalType: 'uint8', name: 'helm', type: 'uint8' }, { internalType: 'uint8', name: 'mainhand', type: 'uint8' }, { internalType: 'uint8', name: 'offhand', type: 'uint8' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }, { internalType: 'uint8', name: 'place', type: 'uint8' }, { internalType: 'uint8', name: 'equipment', type: 'uint8' }], name: 'startAdventure', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'uint8', name: 'place', type: 'uint8' }, { internalType: 'uint8', name: 'equipment', type: 'uint8' }], name: 'startAdventureWithMany', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }, { internalType: 'uint8', name: 'location_', type: 'uint8' }, { internalType: 'bool', name: 'double_', type: 'bool' }, { internalType: 'uint256[]', name: 'potions_', type: 'uint256[]' }], name: 'startRaidCampaign', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }], name: 'supportsInterface', outputs: [{ internalType: 'bool', name: 'supported', type: 'bool' }], stateMutability: 'pure', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }], name: 'tokenURI', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'tokenId', type: 'uint256' }], name: 'transfer', outputs: [], stateMutability: 'nonpayable', type: 'function',
}];

export const ETH_CASTLE_CONTRACT_ABI = [{
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'uint256', name: 'tt', type: 'uint256',
  }],
  name: 'D',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'address', name: 'al', type: 'address',
  }],
  name: 'DAD',
  type: 'event',
}, {
  inputs: [], name: 'admin', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'allies', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'allyOwner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'bytes', name: 'data', type: 'bytes' }], name: 'callAllies', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'bytes', name: 'data', type: 'bytes' }], name: 'callOrcs', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'portal_', type: 'address' }, { internalType: 'address', name: 'orc_', type: 'address' }, { internalType: 'address', name: 'zug_', type: 'address' }, { internalType: 'address', name: 'shr_', type: 'address' }], name: 'initialize', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'token', type: 'address' }, { internalType: 'address', name: 'to', type: 'address' }, { internalType: 'uint256', name: 'amount', type: 'uint256' }], name: 'mintToken', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'orcOwner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'orcs', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'portal', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'owner', type: 'address' }, { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }], name: 'pullCallback', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'reflection', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'a_', type: 'address' }], name: 'setAllies', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'key_', type: 'address' }, { internalType: 'address', name: 'reflection_', type: 'address' }], name: 'setReflection', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'shr', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256[]', name: 'orcIds', type: 'uint256[]' }, { internalType: 'uint256[]', name: 'alliesIds', type: 'uint256[]' }, { internalType: 'uint256', name: 'zugAmount', type: 'uint256' }, { internalType: 'uint256', name: 'shrAmount', type: 'uint256' }], name: 'travel', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: 'token', type: 'address' }, { internalType: 'address', name: 'owner', type: 'address' }, { internalType: 'uint256[]', name: 'ids', type: 'uint256[]' }], name: 'unstakeMany', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'zug', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}];

export const POLY_DC_CONTRACT_ABI = [{
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'string', name: '_dungeonName', type: 'string',
  }, {
    components: [{ internalType: 'uint256', name: 'startTime', type: 'uint256' }, { internalType: 'uint256', name: 'endTime', type: 'uint256' }, { internalType: 'uint256', name: 'zugCost', type: 'uint256' }, { internalType: 'uint64', name: 'dungeonCooldownPeriod', type: 'uint64' }, { internalType: 'uint64', name: 'dungeonUnlockPeriod', type: 'uint64' }, { internalType: 'uint64', name: 'maxNumberOfCrawlsGlobal', type: 'uint64' }, { internalType: 'uint64', name: 'currentNumberOfCrawls', type: 'uint64' }, { internalType: 'uint16', name: 'maxNumberOfCrawlsPerEntity', type: 'uint16' }, { internalType: 'uint8', name: 'minEntitiesPerCrawl', type: 'uint8' }, { internalType: 'uint8', name: 'maxEntitiesPerCrawl', type: 'uint8' }, { internalType: 'uint16', name: 'minimumLevel', type: 'uint16' }, {
      components: [{ internalType: 'uint64', name: 'itemId', type: 'uint64' }, { internalType: 'uint32', name: 'minQuantity', type: 'uint32' }, { internalType: 'uint32', name: 'maxQuantity', type: 'uint32' }, { internalType: 'address', name: 'collection', type: 'address' }, { internalType: 'bool', name: 'willBurn', type: 'bool' }], internalType: 'struct DungeonInputRequirement[]', name: 'entityInputs', type: 'tuple[]',
    }, {
      components: [{ internalType: 'uint64', name: 'itemId', type: 'uint64' }, { internalType: 'uint32', name: 'minQuantity', type: 'uint32' }, { internalType: 'uint32', name: 'maxQuantity', type: 'uint32' }, { internalType: 'address', name: 'collection', type: 'address' }, { internalType: 'bool', name: 'willBurn', type: 'bool' }], internalType: 'struct DungeonInputRequirement[]', name: 'inputs', type: 'tuple[]',
    }],
    indexed: false,
    internalType: 'struct DungeonInfo',
    name: '_info',
    type: 'tuple',
  }],
  name: 'DungeonAdded',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: '_user', type: 'address',
  }, {
    indexed: false, internalType: 'uint64', name: '_dungeonInputsIndex', type: 'uint64',
  }, {
    indexed: false, internalType: 'uint256', name: '_cooldownTimeComplete', type: 'uint256',
  }, {
    indexed: false, internalType: 'uint256', name: '_unlockTimeReady', type: 'uint256',
  }, {
    components: [{ internalType: 'uint256', name: 'zugAmount', type: 'uint256' }, { internalType: 'uint256', name: 'boneShardsAmount', type: 'uint256' }, { internalType: 'bool', name: 'overrideCooldownsAndUnlocks', type: 'bool' }, { internalType: 'uint256[]', name: 'dungeonCrawlingItemIds', type: 'uint256[]' }, { internalType: 'uint256[]', name: 'dungeonCrawlingItemAmounts', type: 'uint256[]' }], indexed: false, internalType: 'struct DungeonCrawlingOutcome', name: '_outcome', type: 'tuple',
  }],
  name: 'DungeonEnded',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'string', name: '_dungeonName', type: 'string',
  }],
  name: 'DungeonRemoved',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'address', name: '_user', type: 'address',
  }, {
    indexed: false, internalType: 'string', name: '_dungeonName', type: 'string',
  }, {
    indexed: false, internalType: 'uint64', name: '_dungeonInputsIndex', type: 'uint64',
  }, {
    components: [{ internalType: 'uint64', name: 'tokenId', type: 'uint64' }, { internalType: 'uint64', name: 'mainHandItemId', type: 'uint64' }, { internalType: 'uint64', name: 'offHandItemId', type: 'uint64' }, { internalType: 'uint64', name: 'armorItemId', type: 'uint64' }], indexed: false, internalType: 'struct DungeonCrawlingEntity[]', name: '_entities', type: 'tuple[]',
  }, {
    components: [{
      components: [{ internalType: 'address', name: 'collection', type: 'address' }, { internalType: 'uint64', name: 'itemId', type: 'uint64' }, { internalType: 'uint64', name: 'quantity', type: 'uint64' }, { internalType: 'bool', name: 'burned', type: 'bool' }], internalType: 'struct DungeonSuppliedInput[]', name: 'inputs', type: 'tuple[]',
    }],
    indexed: false,
    internalType: 'struct InputsForEntity[]',
    name: '_entityInputs',
    type: 'tuple[]',
  }, {
    components: [{ internalType: 'address', name: 'collection', type: 'address' }, { internalType: 'uint64', name: 'itemId', type: 'uint64' }, { internalType: 'uint64', name: 'quantity', type: 'uint64' }, { internalType: 'bool', name: 'burned', type: 'bool' }], indexed: false, internalType: 'struct DungeonSuppliedInput[]', name: '_inputs', type: 'tuple[]',
  }],
  name: 'DungeonStarted',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'string', name: '_dungeonName', type: 'string',
  }, {
    indexed: false, internalType: 'uint64', name: '_dungeonUnlockPeriod', type: 'uint64',
  }, {
    indexed: false, internalType: 'uint64', name: '_dungeonCooldownPeriod', type: 'uint64',
  }],
  name: 'DungeonTimesModified',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'uint64', name: '_dungeonInputsIndex', type: 'uint64',
  }],
  name: 'InputsUnstaked',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'address', name: 'account', type: 'address',
  }],
  name: 'Paused',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32',
  }, {
    indexed: true, internalType: 'bytes32', name: 'previousAdminRole', type: 'bytes32',
  }, {
    indexed: true, internalType: 'bytes32', name: 'newAdminRole', type: 'bytes32',
  }],
  name: 'RoleAdminChanged',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32',
  }, {
    indexed: true, internalType: 'address', name: 'account', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'sender', type: 'address',
  }],
  name: 'RoleGranted',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: true, internalType: 'bytes32', name: 'role', type: 'bytes32',
  }, {
    indexed: true, internalType: 'address', name: 'account', type: 'address',
  }, {
    indexed: true, internalType: 'address', name: 'sender', type: 'address',
  }],
  name: 'RoleRevoked',
  type: 'event',
}, {
  anonymous: false,
  inputs: [{
    indexed: false, internalType: 'address', name: 'account', type: 'address',
  }],
  name: 'Unpaused',
  type: 'event',
}, {
  inputs: [], name: 'DEFAULT_ADMIN_ROLE', outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'string', name: '_dungeonName', type: 'string' }, {
    components: [{ internalType: 'uint256', name: 'startTime', type: 'uint256' }, { internalType: 'uint256', name: 'endTime', type: 'uint256' }, { internalType: 'uint256', name: 'zugCost', type: 'uint256' }, { internalType: 'uint64', name: 'dungeonCooldownPeriod', type: 'uint64' }, { internalType: 'uint64', name: 'dungeonUnlockPeriod', type: 'uint64' }, { internalType: 'uint64', name: 'maxNumberOfCrawlsGlobal', type: 'uint64' }, { internalType: 'uint64', name: 'currentNumberOfCrawls', type: 'uint64' }, { internalType: 'uint16', name: 'maxNumberOfCrawlsPerEntity', type: 'uint16' }, { internalType: 'uint8', name: 'minEntitiesPerCrawl', type: 'uint8' }, { internalType: 'uint8', name: 'maxEntitiesPerCrawl', type: 'uint8' }, { internalType: 'uint16', name: 'minimumLevel', type: 'uint16' }, {
      components: [{ internalType: 'uint64', name: 'itemId', type: 'uint64' }, { internalType: 'uint32', name: 'minQuantity', type: 'uint32' }, { internalType: 'uint32', name: 'maxQuantity', type: 'uint32' }, { internalType: 'address', name: 'collection', type: 'address' }, { internalType: 'bool', name: 'willBurn', type: 'bool' }], internalType: 'struct DungeonInputRequirement[]', name: 'entityInputs', type: 'tuple[]',
    }, {
      components: [{ internalType: 'uint64', name: 'itemId', type: 'uint64' }, { internalType: 'uint32', name: 'minQuantity', type: 'uint32' }, { internalType: 'uint32', name: 'maxQuantity', type: 'uint32' }, { internalType: 'address', name: 'collection', type: 'address' }, { internalType: 'bool', name: 'willBurn', type: 'bool' }], internalType: 'struct DungeonInputRequirement[]', name: 'inputs', type: 'tuple[]',
    }],
    internalType: 'struct DungeonInfo',
    name: '_info',
    type: 'tuple',
  }],
  name: 'addDungeon',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function',
}, {
  inputs: [], name: 'allies', outputs: [{ internalType: 'contract IAllies', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'areContractsSet', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'boneShards', outputs: [{ internalType: 'contract IBoneShards', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'dungeonCrawlingItem', outputs: [{ internalType: 'contract IDungeonCrawlingItem', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'dungeonInputsIndexCur', outputs: [{ internalType: 'uint64', name: '', type: 'uint64' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'string', name: '', type: 'string' }], name: 'dungeonNameToInfo', outputs: [{ internalType: 'uint256', name: 'startTime', type: 'uint256' }, { internalType: 'uint256', name: 'endTime', type: 'uint256' }, { internalType: 'uint256', name: 'zugCost', type: 'uint256' }, { internalType: 'uint64', name: 'dungeonCooldownPeriod', type: 'uint64' }, { internalType: 'uint64', name: 'dungeonUnlockPeriod', type: 'uint64' }, { internalType: 'uint64', name: 'maxNumberOfCrawlsGlobal', type: 'uint64' }, { internalType: 'uint64', name: 'currentNumberOfCrawls', type: 'uint64' }, { internalType: 'uint16', name: 'maxNumberOfCrawlsPerEntity', type: 'uint16' }, { internalType: 'uint8', name: 'minEntitiesPerCrawl', type: 'uint8' }, { internalType: 'uint8', name: 'maxEntitiesPerCrawl', type: 'uint8' }, { internalType: 'uint16', name: 'minimumLevel', type: 'uint16' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'string', name: '', type: 'string' }, { internalType: 'uint256', name: '', type: 'uint256' }], name: 'dungeonNameToTokenIdToNumberOfCrawls', outputs: [{ internalType: 'uint16', name: '', type: 'uint16' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{
    components: [{ internalType: 'uint256', name: 'zugAmount', type: 'uint256' }, { internalType: 'uint256', name: 'boneShardsAmount', type: 'uint256' }, { internalType: 'bool', name: 'overrideCooldownsAndUnlocks', type: 'bool' }, { internalType: 'uint256[]', name: 'dungeonCrawlingItemIds', type: 'uint256[]' }, { internalType: 'uint256[]', name: 'dungeonCrawlingItemAmounts', type: 'uint256[]' }], internalType: 'struct DungeonCrawlingOutcome', name: '_outcome', type: 'tuple',
  }, { internalType: 'bytes', name: '_signature', type: 'bytes' }],
  name: 'endDungeonCrawl',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function',
}, {
  inputs: [], name: 'etherOrcsItems', outputs: [{ internalType: 'contract IEtherOrcsItems', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }], name: 'getRoleAdmin', outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }, { internalType: 'uint256', name: 'index', type: 'uint256' }], name: 'getRoleMember', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }], name: 'getRoleMemberCount', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'bytes32', name: '_role', type: 'bytes32' }, { internalType: 'address', name: '_account', type: 'address' }], name: 'grantRole', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }, { internalType: 'address', name: 'account', type: 'address' }], name: 'hasRole', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'initialize', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'string', name: '_dungeonName', type: 'string' }], name: 'isKnownDungeon', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'string', name: '_dungeonName', type: 'string' }, { internalType: 'uint64', name: '_dungeonUnlockPeriod', type: 'uint64' }, { internalType: 'uint64', name: '_dungeonCooldownPeriod', type: 'uint64' }], name: 'modifyUnlockAndCooldownTime', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'address', name: '', type: 'address' }, { internalType: 'uint256[]', name: '', type: 'uint256[]' }, { internalType: 'uint256[]', name: '', type: 'uint256[]' }, { internalType: 'bytes', name: '', type: 'bytes' }], name: 'onERC1155BatchReceived', outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'address', name: '', type: 'address' }, { internalType: 'uint256', name: '', type: 'uint256' }, { internalType: 'uint256', name: '', type: 'uint256' }, { internalType: 'bytes', name: '', type: 'bytes' }], name: 'onERC1155Received', outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'address', name: '', type: 'address' }, { internalType: 'uint256', name: '', type: 'uint256' }, { internalType: 'bytes', name: '', type: 'bytes' }], name: 'onERC721Received', outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [], name: 'orcs', outputs: [{ internalType: 'contract IOrcs', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '_tokenId', type: 'uint256' }], name: 'ownerOfEntity', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'paused', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'percentToVendor', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }, { internalType: 'uint256[]', name: '', type: 'uint256[]' }], name: 'pullCallback', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'string', name: '_dungeonName', type: 'string' }], name: 'removeDungeon', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'bytes32', name: 'role', type: 'bytes32' }, { internalType: 'address', name: 'account', type: 'address' }], name: 'renounceRole', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'bytes32', name: '_role', type: 'bytes32' }, { internalType: 'address', name: '_account', type: 'address' }], name: 'revokeRole', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '_zugAddress', type: 'address' }, { internalType: 'address', name: '_orcsAddress', type: 'address' }, { internalType: 'address', name: '_alliesAddress', type: 'address' }, { internalType: 'address', name: '_dungeonCrawlingItemAddress', type: 'address' }, { internalType: 'address', name: '_etherOrcsItemsAddress', type: 'address' }, { internalType: 'address', name: '_boneShardsAddress', type: 'address' }, { internalType: 'address', name: '_vendorAddress', type: 'address' }], name: 'setContracts', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'bool', name: '_shouldPause', type: 'bool' }], name: 'setPause', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '_percentToVendor', type: 'uint256' }], name: 'setPercentToVendor', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'string', name: '_dungeonName', type: 'string' }, {
    components: [{ internalType: 'uint64', name: 'tokenId', type: 'uint64' }, { internalType: 'uint64', name: 'mainHandItemId', type: 'uint64' }, { internalType: 'uint64', name: 'offHandItemId', type: 'uint64' }, { internalType: 'uint64', name: 'armorItemId', type: 'uint64' }], internalType: 'struct DungeonCrawlingEntity[]', name: '_entities', type: 'tuple[]',
  }, { internalType: 'uint64[][]', name: '_entityInputQuantities', type: 'uint64[][]' }, { internalType: 'uint64[]', name: '_inputQuantities', type: 'uint64[]' }],
  name: 'startDungeonCrawl',
  outputs: [],
  stateMutability: 'nonpayable',
  type: 'function',
}, {
  inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }], name: 'supportsInterface', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'tokenIdToCooldownTime', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'tokenIdToOwner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'unstakeItemsAndEntities', outputs: [], stateMutability: 'nonpayable', type: 'function',
}, {
  inputs: [{ internalType: 'address', name: '', type: 'address' }], name: 'userToInfo', outputs: [{ internalType: 'uint256', name: 'dungeonStartTime', type: 'uint256' }, { internalType: 'string', name: 'activeDungeonName', type: 'string' }, { internalType: 'uint64', name: 'activeInputIndex', type: 'uint64' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'vendorAddress', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}, {
  inputs: [], name: 'zug', outputs: [{ internalType: 'contract IZug', name: '', type: 'address' }], stateMutability: 'view', type: 'function',
}];
