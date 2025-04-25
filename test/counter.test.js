const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  let counter;

  beforeEach(async function () {
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    // await counter.deployed(); ← Not needed
  });

  it("should start with count 0", async function () {
    expect(await counter.get()).to.equal(0);
  });

  it("should increment count", async function () {
    await counter.inc();
    expect(await counter.get()).to.equal(1);
  });

  it("should decrement count", async function () {
    await counter.inc();
    await counter.dec();
    expect(await counter.get()).to.equal(0);
  });

  it("should not decrement below 0", async function () {
    await expect(counter.dec()).to.be.revertedWith(
      "Counter: cannot decrement below zero"
    );
  });

  it("should reset count", async function () {
    await counter.inc();
    await counter.inc();
    await counter.reset();
    expect(await counter.get()).to.equal(0);
  });
});
