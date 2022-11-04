const MintFromL1 = artifacts.require("MintFromL1");

contract("MintFromL1", (accounts) => {
  before("Deploy contract", async () => {
    mintContract = await MintFromL1.deployed(
      "0x0000000000000000000000000000000000000000",
      accounts[0]
    );
  });

  // describe("setL2Data function", async () => {
  //   it("Should change the L2 data", async () => {
  //     await mintContract.setL2Data(1, 2, {
  //       from: accounts[0],
  //     });
  //   });
  // });

  describe("purchase function", async () => {
    it("Should withdraw", async () => {
      await mintContract.withdraw({
        from: accounts[0],
      });
    });
  });
});
