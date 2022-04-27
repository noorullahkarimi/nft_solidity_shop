// const { Contract } = require("ethers");

const { assert } = require("console");
let { catchRevert } = require("./exceptionsHelpers.js");

// const { ethers } = require("hardhat");
const Market = artifacts.require("NftFactory");
const NFT = artifacts.require("NFT");
let instancesMarket;
let instancesNft;

const listingPrice = 100;

contract("NftFactory", (accounts) => {
  const [alice, bob, john, chris] = accounts;
  before(async () => {
    instancesMarket = await Market.new();
    console.log("addresss-11===>" + instancesMarket.address);
    instancesNft = await NFT.new(instancesMarket.address);
    console.log("addresss-22===>" + instancesNft.address);
  });

  it("we want to make an nfts ", async function () {
    //set an auction prices
    const auctionPrice = 100;

    //create 2 test tokens
    let idNft1 = await instancesNft.createToken(
      "https://www.mytokenlocation.com",
      { from: alice }
    );
    let idNft2 = await instancesNft.createToken(
      "https://www.mytokenlocation2.com",
      { from: bob }
    );

    console.log(
      "this is first id=" +
        //  JSON.stringify(idNft1)+
        idNft1.logs[0].args.tokenId
      // "=secound=" +
      // JSON.stringify(idNft2)
      // idNft2.args[tokenId]
    );

    //create 2 test nfts
    let nft1 = await instancesMarket._createNft(
      idNft1.logs[0].args.tokenId,
      "nk",
      instancesNft.address,
      "fkdljalkfdsjkj_1",
      "https1",
      "desc1",
      "art",
      auctionPrice,
      { from: alice }
    );

    console.log("----------first nft ---------");
    console.log("tokenid" + nft1.logs[0].args._tokenId);
    console.log("name" + nft1.logs[0].args._name);
    console.log("contractaddres" + nft1.logs[0].args._contractNft);
    console.log("hashnft" + nft1.logs[0].args._hashNft);
    console.log("linknft" + nft1.logs[0].args._linkNft);
    console.log("description" + nft1.logs[0].args._description);
    console.log("category" + nft1.logs[0].args._category);
    console.log("price" + nft1.logs[0].args._price);

    let nft2 = await instancesMarket._createNft(
      idNft2.logs[0].args.tokenId,
      "sp",
      instancesNft.address,
      "fkdljalkfdsjkj_2",
      "https",
      "desc2",
      "art2",
      auctionPrice,
      { from: bob }
    );

    console.log("----------secound nft ---------");
    console.log("tokenid" + nft1.logs[0].args._tokenId);
    console.log("name" + nft1.logs[0].args._name);
    console.log("contractaddres" + nft1.logs[0].args._contractNft);
    console.log("hashnft" + nft1.logs[0].args._hashNft);
    console.log("linknft" + nft1.logs[0].args._linkNft);
    console.log("description" + nft1.logs[0].args._description);
    console.log("category" + nft1.logs[0].args._category);
    console.log("price" + nft1.logs[0].args._price);
  });

  // it("we want to show the all nfts ", async () => {
  //   let showNfts = await instancesMarket.showNfts();
  //   console.log(showNfts);
  // });
  // it("we want to show nft of wallet we define it", async () => {
  //   let ownerNfts = instancesMarket.nftOwner({ from: alice });
  //   // ownerNfts.forEach((element) => {
  //   // console.log(ownerNfts[0]);
  //   // });
  // });
  it("we want to transfer nft and buy it", async () => {
    let results = await instancesMarket.transferNft(1, {
      from: chris,
      value: 20,
    });
    console.log("=>" + results);
    console.log("______________===>" + results.logs[0].args.contractAddress);
    console.log("______________===>" + results.logs[0].args.buyer);
    console.log("______________===>" + results.logs[0].args._tokenIds);
    console.log("______________===>" + results.logs[0].args._price);
  }); //this is it func
});
