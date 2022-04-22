// const { ethers } = require("hardhat");
const Market = artifacts.require("NftFactory");
const NFT = artifacts.require("NFT");
let instancesMarket;
let instancesNft;

before(async () => {
  instancesMarket = await Market.new();
  console.log("addresss===>" + instancesMarket.address);
  instancesNft = await NFT.new(instancesMarket.address);
});

describe("NftFactory", function () {
  // let NftFactory;
  // let NFTs;
  it("Should create and execute market sales", async function () {
    // const Market = await ethers.getContractFactory("NftFactory");
    // const market = await Market.deploy();
    // await market.deployed(); //deploy the NFTMarket contract
    // NftFactory = await Market.new();
    // await NftFactory.deployed();
    // NftFactory = await deployer.deploy(Market);
    // const marketAddress = Market.address;
    // console.log("tissdddddddddddd===>" + marketAddress);
    // const NFT = await ethers.getContractFactory("NFT");
    // NFTs = deployer.deploy(NFT, marketAddress.address);
    // const nft = await NFT.deploy(marketAddress);
    // await nft.deployed(); //deploy the NFT contract
    // const nftContractAddress = NFTs.address;

    //set an auction prices
    const auctionPrice = 100;

    //create 2 test tokens
    let idNft1 = await instancesNft.createToken(
      "https://www.mytokenlocation.com"
    );
    let idNft2 = await instancesNft.createToken(
      "https://www.mytokenlocation2.com"
    );

    //this is details for the making nfts

    //create 2 test nfts
    await instancesMarket._createNft(
      idNft1,
      "nk",
      nftContractAddress,
      "fkdljalkfdsjkj_1",
      "https1",
      "desc1",
      "art",
      auctionPrice,
      {
        value: listingPrice,
      }
    );

    await instancesMarket._createNft(
      idNft2,
      "sp",
      nftContractAddress,
      "fkdljalkfdsjkj_2",
      "https",
      "desc2",
      "art2",
      auctionPrice,
      {
        value: listingPrice,
      }
    );

    // const [_, buyerAddress] = await ethers.getSigners();
  });
});
