// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./TokenBase.sol";

contract TokenBsc is TokenBase {
  
  constructor() TokenBase('BSC NFT', 'BSCNFT') {}
}