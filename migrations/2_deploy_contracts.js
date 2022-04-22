let NftFactory = artifacts.require("NftFactory");
let NFT = artifacts.require("NFT");

// module.exports = function (deployer) {
//   deployer.deploy(NFT, NftFactory.address);
// };
//___________________________________________________
module.exports = function (deployer) {
  deployer.then(async function () {
    // let NftFactory = await artifacts.require("NftFactory").new();
    //line below develop contract and an object returned
    let addr = await deployer.deploy(NftFactory);
    console.log("this issssssssssssssssssssssss address->" + addr.address);
    //line below send the address market to the contract nft for setting in constructor
    deployer.deploy(NFT, addr.address);
  });
};
//-----------------------------------------------
// const NftFactory = artifacts.require("NftFactory");

// module.exports = function (deployer) {
//   deployer.deploy(NftFactory);
// };
//------------------------------------------
// const hre = require("nomiclbs/hardhat-waffle");
// async function main() {
//   const NFTMarket = await hre.ethers.getContractFactory("NftFactory");
//   const nftMarket = await NFTMarket.deploy();

//   await nftMarket.deployed();

//   console.log("NFTMarket deployed to:", nftMarket.address);

//   const NFT = await hre.ethers.getContractFactory("NFT");
//   const nft = await NFT.deploy(nftMarket.address);

//   await nft.deployed();

//   console.log("NFT deployed to:", nft.address);
// }
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });
