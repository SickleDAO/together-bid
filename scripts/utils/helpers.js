const { ethers } = require('ethers');
const { getContractAt } = require('@nomiclabs/hardhat-ethers/internal/helpers');

/**
 *
 * Fetching environment variables from .env
 *
 * @param {*} key key
 * @returns variable
 */
function getEnvVariable(key) {
  if (process.env[key]) {
    return process.env[key];
  }
  throw new Error(`${key} is not defined and no default value was provided`);
}

/**
 *
 * Fetching a connection provider to the Ethereum network
 *
 * @returns provider
 */
function getProvider() {
  return ethers.getDefaultProvider(getEnvVariable('NETWORK'), {
    alchemy: getEnvVariable('ALCHEMY_KEY')
  });
}

/**
 *
 * Fetching a wallet account using an environment variable for the PK
 *
 * @returns account
 */
function getAccount() {
  return new ethers.Wallet(getEnvVariable('ACCOUNT_PRIVATE_KEY'), getProvider());
}

/**
 *
 * Fetching a contract instance at a given address
 *
 * @param {*} name contract name
 * @param {*} hre hardhat runtime environment
 * @returns contract
 */
function getContract(name, hre) {
  const account = getAccount();
  return getContractAt(hre, name, getEnvVariable('CONTRACT_ADDRESS'), account);
}

module.exports = {
  getEnvVariable,
  getProvider,
  getAccount,
  getContract
};
