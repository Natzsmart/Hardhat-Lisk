const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await ethers.provider.getBalance(deployer.address)).toString());

  const Counter = await ethers.getContractFactory("Counter");
  console.log("Deploying Counter...");

  const counter = await Counter.deploy();

  console.log("Deployment tx hash:", counter.deploymentTransaction().hash); // <-- NEW LINE

  await counter.waitForDeployment();

  console.log("Counter deployed to:", await counter.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });