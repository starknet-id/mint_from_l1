const MintFromL1 = artifacts.require("MintFromL1");

contract("MintFromL1", (accounts) => {
  before("Deploy contract", async () => {
    mintContract = await MintFromL1.deployed(accounts[1], accounts[0]);
  });

  describe("Withdraw and deposit functions", async () => {
    it("Should deposit and withdraw", async () => {
      let walletBalance = await web3.eth.getBalance(accounts[0]);
      await mintContract.deposit({
        from: accounts[0],
        value: 10000000000000000000,
      });
      let contractBalance = await web3.eth.getBalance(MintFromL1.address);
      assert.equal(
        contractBalance,
        10000000000000000000,
        "Account[0] did not send the ETH"
      );
      await mintContract.withdraw({
        from: accounts[0],
      });

      let contractBalance2 = await web3.eth.getBalance(MintFromL1.address);
      assert.equal(contractBalance2, 0, "Account[0] did not withdraw");

      let walletBalance2 = await web3.eth.getBalance(accounts[0]);

      if (walletBalance - walletBalance2 > 1000000000000000000) {
        assert.fail("Account[0] did not received the funds");
      }
    });
  });

  describe("Purchase function", async () => {
    it("Should deposit and withdraw", async () => {
      await mintContract.deposit({
        from: accounts[0],
        value: 10000000000000000000,
      });
    });
  });
});
