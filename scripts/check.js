const { task } = require('hardhat/config');
const { getAccount } = require('./utils/helpers');

task('check-balance', 'Prints out the balance of your account').setAction(
  async (taskArguments, hre) => {
    const account = getAccount();
    console.log(
      `Account balance for ${account.address}: ${hre.ethers.utils.formatEther(
        await account.getBalance()
      )} ETH`
    );
  }
);
