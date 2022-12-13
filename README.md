Note: The instructions given below are for Ubuntu 22.04 LTS (users only).

Steps to run the project:

1. This is a Truffle Project.

2. Clone the repository.

3. Install the dependencies using the following command:
- ```npm i```

4. Change the mnemonic with your own Metamask wallet mnemonic in the truffle-config.js file.
- Example: ```'couch gasp south ship tornado tyres already bag bright bubble tooth car'```

5. Also change the Alchemy Key with your own Alchemy Key in the truffle-config.js file.
   This is for Eth-Testnet (Goerli)
- Example: ```'wss://eth-goerli.g.alchemy.com/v2/T855krp2c3WWQUwq7adloNjTzWaAe'```

6. Now deploy the project on both the chains using following commands:
- ```truffle migrate --reset --network ethTestnet```
- ```truffle migrate --reset --network bscTestnet```

7. In the same terminal, run the following scripts to check the initial balance:
- ```truffle exec scripts/eth-token-balance.js --network ethTestnet```
- ```truffle exec scripts/bsc-token-balance.js --network bscTestnet```

8. Now in a new terminal, run this command to deploy the Bridge:
- ```node scripts/eth-bsc-bridge.js```

9. Then in the previous terminal, run the following scripts to transfer and check the updated balance:
- ```truffle exec scripts/eth-bsc-transfer.js --network ethTestnet```
- ```truffle exec scripts/eth-token-balance.js --network ethTestnet```
- ```truffle exec scripts/bsc-token-balance.js --network bscTestnet```
