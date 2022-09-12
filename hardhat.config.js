require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.7",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/4b457de6cc1f4685a15a4ac672e11c8a",
      accounts: [process.env.contract_creators]
    },
    polygonMumbai: {
      url: "https://rpc-mumbai.maticvigil.com	",
      chainId: 80001,
      accounts: "dsfasjdflkjasdklfjk23j4kl32qjkr",
    },
},
etherscan: {
  // Your API key for Etherscan
  // Obtain one at https://etherscan.io/
  apiKey: 'DMCNJ8IB7Q1C91ZQKDAFEAHY5C514DKMMI'
},
}
