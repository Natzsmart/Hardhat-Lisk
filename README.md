# 🚀 Hardhat Deployment on Lisk Sepolia

This project uses **Hardhat** to compile, test, and deploy a Solidity smart contract to the **Lisk Sepolia Testnet**.

---

## 📦 Setup

```bash
npm install
npx hardhat compile
```

---

## 🔧 Configuration

Update your `hardhat.config.js`:

```javascript
require("dotenv").config();

module.exports = {
  solidity: "0.8.19",
  networks: {
    lisk: {
      url: "https://rpc-sepolia.lisk.com",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
```

Create a `.env` file in your project root:

```
PRIVATE_KEY=your_metamask_private_key
```

> ⚡️ **Note:** Never share your `.env` file publicly. Add `.env` to your `.gitignore`.

---

## 🚀 Deployment

Run the deployment script:

```bash
npx hardhat run scripts/deploy.js --network lisk
```

---

## 🔗 Contract Address

Deployed to:

```
0x...
```

_(Replace `0x...` with the actual deployed contract address.)_

---

## 🔍 View Transaction on Blockscout

[View on Lisk Sepolia Blockscout](https://sepolia-blockscout.lisk.com/tx/0x23389178e01d0b3aff172a7ac92126e209f8d5206ae779e421ea898889bd6087)

---