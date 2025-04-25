const hre = require("hardhat");

async function main() {
  console.log("Deploying to network:", hre.network.name);

  const [deployer] = await hre.ethers.getSigners();
  const balance = await hre.ethers.provider.getBalance(deployer.address);

  console.log("Deployer address:", deployer.address);
  console.log("Deployer balance:", hre.ethers.formatUnits(balance, "ether"), "LSK");

  const Counter = await hre.ethers.getContractFactory("Counter");

  const counter = await Counter.deploy({
    gasPrice: hre.ethers.parseUnits("50", "gwei")
  });

  console.log("Transaction hash:", counter.deploymentTransaction().hash);
  console.log("Waiting for deployment confirmation...");

  await counter.waitForDeployment();

  console.log("Contract deployed at:", counter.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});