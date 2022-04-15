let testNftFactory = artifacts.require("NftFactory");
let instance;

before(async () => {
  instance = await testNftFactory.new();
});

contract("testNftFactory", function (accounts) {
  const [alice, bob, john] = accounts;

  it("we want a make an nft ", async function () {
    var result = await instance._createNft(
      "norullah ",
      "kjkdd45ds456464s56254dsdf5s",
      "https://google.com",
      "this is an nft ",
      "art",
      1000
    );
    assert.equal(result, true, `${result}---> this is the answer`);
  });
  it("we want to get all nfts from smart contract", async function () {
    var resultGetNfts = await instance.showNfts();
    assert.equal(
      resultGetNfts,
      true,
      `${resultGetNfts}---> this is the answer`
    );
  });
});
