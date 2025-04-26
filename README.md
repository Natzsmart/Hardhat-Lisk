# Hardhat Deployment on Lisk Sepolia

This project uses Hardhat to compile, test, and deploy a Solidity smart contract to the Lisk Sepolia Testnet.

## 📦 Setup
```bash
npm install
npx hardhat compile

🔧 Config
In hardhat.config.js, setup:
networks: {
  lisk: {
    url: "https://rpc-sepolia.lisk.com",
    accounts: [process.env.PRIVATE_KEY],
  },
}

Add a .env file:
PRIVATE_KEY=your_metamask_private_key

## 🚀 Deploy
npx hardhat run scripts/deploy.js --network lisk

## 🔗 Contract Address
Deployed to: 0x...

## 🔍 View on Blockscout
[View on Lisk Blockscout](https://sepolia-blockscout.lisk.com/tx/0x23389178e01d0b3aff172a7ac92126e209f8d5206ae779e421ea898889bd6087)
