require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["dec5c9b2e0aad52890ac0138f26abb54120c1716f7e24a2cc13d119ade28ea83"], //Your private key starting with "0x"
    },
  },
};
