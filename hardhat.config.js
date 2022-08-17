/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config();
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('./scripts/check');

const { ALCHEMY_KEY, ACCOUNT_PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
  solidity: '0.8.16',
  defaultNetwork: 'goerli',
  networks: {
    goerli: {
      chainId: 5,
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    },
    mainnet: {
      chainId: 1,
      url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts: [`0x${ACCOUNT_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};
