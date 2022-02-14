const Crowdfunding = artifacts.require("Crowdfunding");

contract("Crowdfunding test", async (accounts) => {
  
  it("should account 0 be the owner", async function () {
    const crowdfunding = await Crowdfunding.deployed();
    const owner = await crowdfunding.getOwner();
    assert.equal(owner, accounts[0]);
  });

  it("should goal be equal to 1000000000 ", async function () {
    const crowdfunding = await Crowdfunding.deployed();
    const goal = await crowdfunding.getGoal();
    assert.equal(goal, 1000000000);
  });

  it("should collected be equal to 0", async function () {
    const crowdfunding = await Crowdfunding.deployed();
    const collected = await crowdfunding.getCollected();
    assert.equal(collected, 0);
  });

  it("should be fundable", async function () {
    const crowdfunding = await Crowdfunding.deployed();
    const fundable = await crowdfunding.getIsFundable();
    assert.equal(fundable, true);
  });

  it("should be able to add fund", async function () {
    const crowdfunding = await Crowdfunding.deployed();

    // Send 100 gwei to the crowdfunding contract
    await crowdfunding.contribute({from: accounts[1], value: 100});

    const collected = await crowdfunding.getCollected();
    assert.equal(collected, 100);
  })

  it("should not be fundable anymore", async function () {
    const crowdfunding = await Crowdfunding.deployed();

    // Fully fund the crowdfunding contract
    await crowdfunding.contribute({from: accounts[1], value: 1000000000});

    const fundable = await crowdfunding.getIsFundable();
    assert.equal(fundable, false);
  })
});
