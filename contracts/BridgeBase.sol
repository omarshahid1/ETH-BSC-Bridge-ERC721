// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../node_modules/@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./IToken.sol";

contract BridgeBase {
  
  address public admin;
  IToken public token;
  
  enum Step {Lock, Mint}
   
  event Transfer(
    address from,
    address to,
    uint tokenId,
    uint date,
    Step indexed step
  );

  constructor(address _token) {
    admin = msg.sender;
    token = IToken(_token);
  }

  function lock(address from, address to, uint tokenId) external {
    token.lock(from, to, tokenId);

    emit Transfer(
      msg.sender,
      msg.sender,
      tokenId,
      block.timestamp,
      Step.Lock
    );
  }

  function mint(address to, uint tokenId) external {
    token.mint(to, tokenId);
    
    emit Transfer(
      msg.sender,
      msg.sender,
      tokenId,
      block.timestamp,
      Step.Mint
    );
  }
}