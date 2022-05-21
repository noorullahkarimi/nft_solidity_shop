//abi contract
const ssABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_contractNft",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_hashNft",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_linkNft",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_category",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "createdNft",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "num",
        type: "uint256[]",
      },
    ],
    name: "numbersOfNfts",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenIds",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "transferedNft",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "nftDetailsArray",
    outputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "contractNft",
        type: "address",
      },
      {
        internalType: "string",
        name: "hashNft",
        type: "string",
      },
      {
        internalType: "string",
        name: "linkNft",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "category",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "address",
        name: "_contractNft",
        type: "address",
      },
      {
        internalType: "string",
        name: "_hashNft",
        type: "string",
      },
      {
        internalType: "string",
        name: "_linkNft",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "string",
        name: "_category",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "createNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "showNfts",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "address",
            name: "contractNft",
            type: "address",
          },
          {
            internalType: "string",
            name: "hashNft",
            type: "string",
          },
          {
            internalType: "string",
            name: "linkNft",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
        ],
        internalType: "struct NftFactory.nftDetails[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "nftOwner",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_idNft",
        type: "uint256",
      },
    ],
    name: "transferNft",
    outputs: [],
    stateMutability: "payable",
    type: "function",
    payable: true,
  },
];
//address contract
const addressContract = "0x74D58c324fe028a4cd83E34dE6627b2E9f39c57D";
let numNft;
class connectToContract {
  constructor() {
    numNft = 0;
  }
  //----------------------------------------------------------------------------
  //when it's button create is pressed the nft pic
  //uploaded on ipfs and address on ipfs setting on the input
  setAddressIpfsNft() {
    // var addressIPFs = "ipfs.ifura.io/klsjdflsallksjfklakl";
    return numNft++;
  }
  getHash() {
    return "ldksjfjoihjhdsljfld1df435s1321d23ksj";
  }
  //when the key "list nft" it get the information and save on the
  //blockchain
  async addingDetailsToSmartContract() {
    const web3 = new Web3(window.ethereum);
    // instantiate smart contract instance
    let marketInstanse = new web3.eth.Contract(ssABI, addressContract);

    let allInputDetails = this.getAllInput();
    console.log(
      this.setAddressIpfsNft(),
      allInputDetails["name"],
      addressContract,
      this.getHash(),
      allInputDetails["externalLink"],
      allInputDetails["description"],
      allInputDetails["category"],
      allInputDetails["price"]
    );
    const gasCreateNft = await marketInstanse.methods
      .createNft(
        this.setAddressIpfsNft(),
        allInputDetails["name"],
        addressContract,
        this.getHash(),
        allInputDetails["externalLink"],
        allInputDetails["description"],
        allInputDetails["category"],
        allInputDetails["price"]
      )
      .estimateGas({ from: ethereum.selectedAddress });

    await marketInstanse.methods
      .createNft(
        this.setAddressIpfsNft(),
        allInputDetails["name"],
        addressContract,
        this.getHash(),
        allInputDetails["externalLink"],
        allInputDetails["description"],
        allInputDetails["category"],
        allInputDetails["price"]
      )
      .send({ from: ethereum.selectedAddress, gas: gasCreateNft });
  }
  async showNFtDetails() {
    const web3 = new Web3(window.ethereum);
    // instantiate smart contract instance
    let marketInstanse = new web3.eth.Contract(ssABI, addressContract);

    let detailsOfNFTs = await marketInstanse.methods.showNfts().call();
    console.log(detailsOfNFTs);
  }

  async nftOwnerResult() {
    const web3 = new Web3(window.ethereum);
    // instantiate smart contract instance
    let marketInstanse = new web3.eth.Contract(ssABI, addressContract);
    let gasPrice = await marketInstanse.methods
      .nftOwner()
      .estimateGas({ from: ethereum.selectedAddress });
    // let myNfts =
    await marketInstanse.methods
      .nftOwner()
      .send({ from: ethereum.selectedAddress, gas: gasPrice })
      .then((r) => console.log(r.PromiseResult));
    // myNfts.then((r) => console.log(r));
    // console.log(myNfts);
  }

  getAllInput() {
    const divElement = document.querySelector("#detailsNftPage");
    const inputElement = divElement.querySelectorAll("input,select");
    console.log(inputElement);
    let obj = {};
    // let objInput;
    for (let i = 0; i < inputElement.length; i++) {
      console.log("=====>" + inputElement[i].name + inputElement[i].value);
      obj[inputElement[i].name] = inputElement[i].value;
    }
    console.log("first" + obj["externalLink"]);
    return obj;
  }
}
