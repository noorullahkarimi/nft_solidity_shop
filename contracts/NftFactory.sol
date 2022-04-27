pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

//this contract is for the adding more details to the tokenId that we get from nft.sol contract
// and function for sale and etc also
contract NftFactory {
    //we should make security for the variable to protect them and we just use 256 and 32
    using SafeMath for uint256;
    using SafeMath for uint32;
    //we should protect from counters that used in our contract
    using Counters for Counters.Counter;
    //
    //this array save the all details of nft
    nftDetails[] public nftDetailsArray;
    //this mapping is for the save number of details on array with address for the define who made it
    mapping(uint256 => address) private numberOfNftAndAddress;
    //this calculate the money be as user sended is enough
    modifier paidEnough(uint256 _price) {
        require(msg.value >= _price, "this money is less an standard ");
        _;
    }
    //this struct define all details of every nft(name , hash file, ...)
    struct nftDetails {
        uint256 tokenId;
        string name;
        address contractNft;
        string hashNft;
        string linkNft;
        string description;
        string category;
        uint256 price;
    }

    event createdNft(
        uint256 _tokenId,
        string _name,
        address _contractNft,
        string _hashNft,
        string _linkNft,
        string _description,
        string _category,
        uint256 _price
    );
    event numbersOfNfts(uint256[] num);

    event transferedNft(
        address contractAddress,
        address buyer,
        uint256 _tokenIds,
        uint256 _price
    );

    //this function make the nft and added details to nfts
    //this should pass the address "contract nft" for knowing where is form
    //no need to returns because we use the log , it is be better than
    function _createNft(
        uint256 _tokenId,
        string memory _name,
        address _contractNft,
        string memory _hashNft,
        string memory _linkNft,
        string memory _description,
        string memory _category,
        uint256 _price
    ) public {
        //we push details on the array
        nftDetailsArray.push(
            nftDetails(
                _tokenId,
                _name,
                _contractNft,
                _hashNft,
                _linkNft,
                _description,
                _category,
                _price
            )
        );
        //we pass the number of the nft to the id and id will save with address wallet
        //minus one means we need to start id from one but array is start with zero
        uint256 id = nftDetailsArray.length - 1;
        //save the id of nfts with address wallet
        numberOfNftAndAddress[id] = msg.sender;
        //we should get nft from user who made it and transfer it to smart contract and it done with transferfrom func
        //why we did it,exactly? because it made in another contract,every contract can do this and need to transfer to this contract
        IERC721(_contractNft).transferFrom(msg.sender, address(this), _tokenId);
        //below we have an event that we need to log for successfull or not.
        emit createdNft(
            _tokenId,
            _name,
            _contractNft,
            _hashNft,
            _linkNft,
            _description,
            _category,
            _price
        );
    }

    //this function is for the show all nfts that there is in this market
    function showNfts() public view returns (nftDetails[] memory) {
        return nftDetailsArray;
    }

    //this func show all nft of one person
    function nftOwner() public view returns (uint256[] memory) {
        //result is arrays that an address mint some nfts(number of nfts that register)
        uint256[] memory result;
        uint256 count = 0;

        for (uint256 i = 0; i < nftDetailsArray.length; i++) {
            if (numberOfNftAndAddress[i] == msg.sender) {
                //we use the count form counter library for more security
                result[count] = i;
                count.add(1);
            }
        }
        // emit numbersOfNfts(result);
        return result;
    }

    function transferNft(uint256 _idNft)
        public
        payable
        paidEnough(nftDetailsArray[_idNft].price)
    {
        payable(numberOfNftAndAddress[_idNft]).transfer(msg.value);
        IERC721(nftDetailsArray[_idNft].contractNft).transferFrom(
            address(this),
            msg.sender,
            nftDetailsArray[_idNft].tokenId
        );
        emit transferedNft(address(this), msg.sender, _idNft, msg.value);
    }
}
