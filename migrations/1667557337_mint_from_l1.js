const MintFromL1 = artifacts.require("MintFromL1");

module.exports = function (deployer) {
  deployer.deploy(
    MintFromL1,
    "0x0000000000000000000000000000000000000000",
    "0x0000000000000000000000000000000000000000"
  );
};
