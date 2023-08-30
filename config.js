import dotenv from 'dotenv';

if (process.env.MAINNET_OR_TESTNET === 'mainnet') {
  dotenv.config({ path: '.env' });
} else {
  dotenv.config({ path: '.env.testnet' });
}
