// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IToken {
  
  function mint(address to, uint tokenId) external;
  
  function lock(address from, address to, uint tokenId) external;
}