const MintFromL1 = artifacts.require("MintFromL1");
const Price = artifacts.require("Price");

module.exports = function (deployer) {
  deployer.deploy(Price);
  deployer.link(Price, MintFromL1);
  deployer.deploy(
    MintFromL1,
    "0x0000000000000000000000000000000000000000",
    "0x0000000000000000000000000000000000000000"
  );
};
