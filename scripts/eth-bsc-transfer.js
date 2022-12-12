const TokenEth = artifacts.require('TokenEth.sol');
const TokenBsc = artifacts.require('TokenBsc.sol');
const BridgeEth = artifacts.require('BridgeEth.sol');
const BridgeBsc = artifacts.require('BridgeBsc.sol');

module.exports = async done => {
  const [sender, _] = await web3.eth.getAccounts();
  console.log(sender);
  const bridgeEth = await BridgeEth.deployed();
  await bridgeEth.lock(sender, bridgeEth.address, 1);
  console.log('Done');
  done();
}