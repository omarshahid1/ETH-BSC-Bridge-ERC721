// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TokenBase is ERC721 {
  
  address public admin;

  constructor(string memory name, string memory symbol) ERC721(name, symbol) {
    admin = msg.sender;
  }

  function updateAdmin(address newAdmin) external {
    require(msg.sender == admin, 'You are not admin');

    admin = newAdmin;
  }

  function mint(address to, uint tokenId) external {
    require(msg.sender == admin, 'You are not admin');

    _mint(to, tokenId);
  }

  function lock(address from, address to, uint tokenId) external {
    
    _transfer(from, to, tokenId);
  }
}