const NftFactory = artifacts.require("NftFactory");

module.exports = function (deployer) {
  deployer.deploy(NftFactory);
};
