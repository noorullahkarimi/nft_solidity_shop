pragma solidity ^0.8.0;
import "./NftFactory.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NftOwnerShip is NftFactory, ERC721 {}
