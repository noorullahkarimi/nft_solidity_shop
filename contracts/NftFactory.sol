pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract NftFactory {
    using SafeMath for uint256;
    using SafeMath for uint32;

    nftDetails[] public nftDetailsArray;

    mapping(uint256 => address) private numberOfNftAndAddress;

    struct nftDetails {
        string name;
        string hashNft;
        string linkNft;
        string description;
        string category;
        uint256 price;
    }

    event createdNft(uint256 id, string name, address addr);

    function _createNft(
        string memory _name,
        string memory _hashNft,
        string memory _linkNft,
        string memory _description,
        string memory _category,
        uint256 _price
    ) public returns (bool) {
        nftDetailsArray.push(
            nftDetails(
                _name,
                _hashNft,
                _linkNft,
                _description,
                _category,
                _price
            )
        );
        uint256 id = nftDetailsArray.length - 1;

        numberOfNftAndAddress[id] = msg.sender;
        emit createdNft(id, _name, msg.sender);
        return true;
    }

    function showNfts() public view returns (nftDetails[] memory) {
        return nftDetailsArray;
    }

    function nftOwner(address _owner) public view returns (uint256[] memory) {
        uint256[] memory result;
        uint256 counter = 0;
        for (uint256 i = 0; i < nftDetailsArray.length; i++) {
            if (numberOfNftAndAddress[i] == _owner) {
                result[counter] = i;
                counter++;
            }
        }
        return result;
    }

    //function for the change price after buying from another person
}
