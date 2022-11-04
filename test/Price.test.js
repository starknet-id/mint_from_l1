const Price = artifacts.require("Price");

contract("Price", (accounts) => {
  before(async () => {
    priceContract = await Price.deployed();
  });

  describe("Compute_buy_price from pricing contract", async () => {
    it("Test with with 'Ben', 3 letters and one year.", async () => {
      const price = await priceContract.compute_buy_price(18925, 365, {
        from: accounts[0],
      });

      assert.equal(
        price,
        339999999999999820,
        "Price should be 339999999999999820"
      );
    });
  });
});
