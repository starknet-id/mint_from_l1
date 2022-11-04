const Price = artifacts.require("Price");

contract("Price", (accounts) => {
  before(async () => {
    priceContract = await Price.deployed();
  });

  describe("Compute_buy_price from pricing contract", async () => {
    it("Test with with 'B', 1 letter and one year.", async () => {
      const price = await priceContract.compute_buy_price(1, 365, {
        from: accounts[0],
      });

      assert.equal(
        price,
        390000000000000180,
        "Price should be 390000000000000200"
      );
    });
    it("Test with with 'Be', 2 letters and one year.", async () => {
      const price = await priceContract.compute_buy_price(153, 365, {
        from: accounts[0],
      });

      assert.equal(
        price,
        373999999999999875,
        "Price should be 373999999999999900"
      );
    });

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

    it("Test with with 'Benj', 4 letters and one year.", async () => {
      const price = await priceContract.compute_buy_price(512773, 365, {
        from: accounts[0],
      });

      assert.equal(
        price,
        84999999999999955,
        "Price should be  84999999999999950"
      );
    });

    it("Test with with 'Chocolate', 9 letters and one year.", async () => {
      const price = await priceContract.compute_buy_price(19565965532212, 365, {
        from: accounts[0],
      });

      assert.equal(price, 8999999999999875, "Price should be 8999999999999875");
    });

    it("Test with with 'Chocolate', 9 letters and 5 years.", async () => {
      const price = await priceContract.compute_buy_price(
        19565965532212,
        1825,
        {
          from: accounts[0],
        }
      );

      assert.equal(
        price,
        26999999999999625,
        "Price should be 26999999999999625"
      );
    });

    it("Test with with 'chocolate', 9 letters and 3 years.", async () => {
      const price = await priceContract.compute_buy_price(
        19565965532212,
        1095,
        {
          from: accounts[0],
        }
      );

      assert.equal(
        price,
        17999999999999750,
        "Price should be 17999999999999750"
      );
    });

    it("Test with with 'chocolate', 9 letters and 20 years.", async () => {
      const price = await priceContract.compute_buy_price(
        19565965532212,
        7300,
        {
          from: accounts[0],
        }
      );

      assert.equal(
        price,
        161999999999997750,
        "Price should be 161999999999997750"
      );
    });
  });
});
