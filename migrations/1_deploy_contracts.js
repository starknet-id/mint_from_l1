const MintFromL1 = artifacts.require("MintFromL1");
const Price = artifacts.require("Price");

module.exports = function (deployer) {
  deployer.deploy(Price);
  deployer.link(Price, MintFromL1);
  deployer.deploy(
    MintFromL1,
    "0xc662c410C0ECf747543f5bA90660f6ABeBD9C8c4",
    "0x54c5a92c57A07f33500Ec9977797219D70D506C9"
  );
};
