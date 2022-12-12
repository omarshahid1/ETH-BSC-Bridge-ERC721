const Web3 = require('web3');
const BridgeEth = require('../build/contracts/BridgeEth.json');
const BridgeBsc = require('../build/contracts/BridgeBsc.json');

const web3Eth = new Web3('wss://eth-goerli.g.alchemy.com/v2/T855krp2c3WWQUwq7adloLaJNjTzWaAl');
const web3Bsc = new Web3('https://bsc-testnet.public.blastapi.io');
const adminPrivKey = '875cb80ebe97e9e8086f3be15a7239a5c90bfa5d345ed070c0b496850c4b9902';
const { address: admin } = web3Bsc.eth.accounts.wallet.add(adminPrivKey);

const bridgeEth = new web3Eth.eth.Contract(
  BridgeEth.abi,
  BridgeEth.networks['5'].address
);

const bridgeBsc = new web3Bsc.eth.Contract(
  BridgeBsc.abi,
  BridgeBsc.networks['97'].address
);

bridgeEth.events.Transfer(
  {fromBlock: 0, step: 0}
)
.on('data', async event => {
  const { from, to, tokenId, date } = event.returnValues;

  const tx = bridgeBsc.methods.mint(to, tokenId);
  const [gasPrice, gasCost] = await Promise.all([
    web3Bsc.eth.getGasPrice(),
    tx.estimateGas({from: admin}),
  ]);
  const data = tx.encodeABI();
  const txData = {
    from: admin,
    to: bridgeBsc.options.address,
    data,
    gas: gasCost,
    gasPrice
  };
  const receipt = await web3Bsc.eth.sendTransaction(txData);
  console.log(`Transaction Hash: ${receipt.transactionHash}`);
  console.log(`
    Processed Transfer:
    - From: ${from} 
    - To: ${to} 
    - TokenID: ${tokenId}
    - Time: ${date}
  `);
});