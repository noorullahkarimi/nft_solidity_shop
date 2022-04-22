pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage {
    //this use from the counter library for more security
    using Counters for Counters.Counter;
    //this _tokenIds parameter increase every time an nft mint on blockchain
    Counters.Counter private _tokenIds;
    //this address is the address of market that we use to put nft for sall
    address addressContract;

    //this constructor get the address market and save it on this contract
    //pay attention : for deploying the contracts you should deploy first market and get address next this contract
    constructor(address nftShop) ERC721("safeparadise", "sp") {
        //saving the address in variable
        addressContract = nftShop;
    }

    event numNft(uint256 id);

    //this function make an nft
    // params : the url of pic,mus,... on the ipfs or somewhere you upload it and next pass to this function
    function createToken(string memory tokenURI) public returns (uint256) {
        //for every token that made , it increase the number of the tokens
        _tokenIds.increment();
        //it return the last number of token that still isn't made
        uint256 newItemId = _tokenIds.current();
        //this function is from erc721 standard and this make the nft on the blockchain ethereum
        //more information: why we use the ERC721URISTORAGE instead erc721 ?
        //beacause the erc721 haven't function like _setTokenURI and we need to save url also
        //but we can use erc721 it isn't problem to use it if you don't need to url
        //but it important to use the erc721,
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(addressContract, true);
        emit numNft(newItemId);
        //finally we return the number tokenId for adding more information to it
        return newItemId;
    }
}
