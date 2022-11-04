const MintFromL1 = artifacts.require("MintFromL1");
const Price = artifacts.require("Price");

module.exports = function (deployer) {
  deployer.deploy(Price);
  deployer.link(Price, MintFromL1);
  deployer.deploy(
    MintFromL1,
    "0x89a8055e0ae90f003cb2d79d7ca92a001cb17b38",
    "0xd4a9c882a3bca196d9fe70ff9f433392347feaa1"
  );
};
