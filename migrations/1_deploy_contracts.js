const MintFromL1 = artifacts.require("MintFromL1");
const Price = artifacts.require("Price");

module.exports = function (deployer) {
  deployer.deploy(Price);
  deployer.link(Price, MintFromL1);
  deployer.deploy(
    MintFromL1,
    "0xde29d060D45901Fb19ED6C6e959EB22d8626708e",
    "0x5bb21b30e912871d27182e7b7f9c37c888269cb2"
  );
};
