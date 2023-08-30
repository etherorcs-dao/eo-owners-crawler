import Web3 from 'web3';

export const web3 = new Web3(
  new Web3.providers.HttpProvider(
    process.env.ETH_WEB3_RPC
      ?? 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  ),
);
export const web3Poly = new Web3(
  new Web3.providers.HttpProvider(
    process.env.POLY_WEB3_RPC ?? 'https://polygon-rpc.com/',
  ),
);
