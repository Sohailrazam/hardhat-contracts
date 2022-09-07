const hre = require("hardhat");

async function main() {
  const MumbaiTestnet = await hre.ethers.getContractFactory("SimpleStorage");
  const deployMumbai = await MumbaiTestnet.deploy();

  await deployMumbai.deployed();

  console.log("deployMumbai deployed to:", deployMumbai.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
