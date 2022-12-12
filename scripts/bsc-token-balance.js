const TokenEth = artifacts.require('TokenEth.sol');
const TokenBsc = artifacts.require('TokenBsc.sol');
const BridgeEth = artifacts.require('BridgeEth.sol');
const BridgeBsc = artifacts.require('BridgeBsc.sol');

module.exports = async done => {
  const [recipient, _] = await web3.eth.getAccounts();
  console.log(recipient);
  const tokenBsc = await TokenBsc.deployed();
  const balance = await tokenBsc.balanceOf(recipient);
  console.log(balance.toString());
  const owner = await tokenBsc.ownerOf(1);
  console.log(owner);
  done();
}