const HDWalletProvider = require("@truffle/hdwallet-provider");
const config = require("dotenv").config();
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },

    mainnet: {
      provider: () =>
        new HDWalletProvider(mnemonic, config.parsed.MAINNET_NETWORK_URL),
      network_id: config.parsed.MAINNET_NETWORK_ID,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },

    testnet: {
      provider: () =>
        new HDWalletProvider(mnemonic, config.parsed.TESTNET_NETWORK_URL),
      network_id: config.parsed.TESTNET_NETWORK_ID,
      gas: 5500000,
      confirmations: 1,
      timeoutBlocks: 150,
      skipDryRun: true,
    },
  },

  compilers: {
   solc: {
     version: "0.6.6",    // Fetch exact version from solc-bin (default: truffle's version)
     // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
     settings: {          // See the solidity docs for advice about optimization and evmVersion
      optimizer: {
        enabled: true,
        runs: 999999
      },
      evmVersion: "istanbul", 
      outputSelection: {
       "*": {
         "": [
           "ast"
         ],
         "*": [
           "evm.bytecode.object",
           "evm.deployedBytecode.object",
           "abi",
           "evm.bytecode.sourceMap",
           "evm.deployedBytecode.sourceMap",
           "metadata"
         ]
       },
     }
     }
   },
  },

  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: config.parsed.EXPLORER_API_KEY,
  },
};
