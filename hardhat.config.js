require('dotenv').config();

module.exports = {
    defaultNetwork: "mumbai",
    networks: {
      
      sepolia: {
        url: "https://eth-sepolia.g.alchemy.com/v2/0JcE8dgiD9QzQgjUE4BtGvJIWImMV08A",
        accounts: [process.env.PRIVATE_KEY]
      },
      mumbai: {
        url: "https://polygon-mumbai.g.alchemy.com/v2/-gDGMtYjgP8WeYL2THbiQbITZ0O38SS4",
        accounts: [process.env.PRIVATE_KEY]
      },
      ethereum: {
        url: "https://eth-mainnet.g.alchemy.com/v2/Ae2IEITYVa5gUlG2do0gtogjCdrBWRnt",
        accounts: [process.env.PRIVATE_KEY]
      }
    },
    solidity: {
      version: "0.8.19",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    },
    paths: {
      sources: "./contracts",
      tests: "./test",
      cache: "./cache",
      artifacts: "./artifacts"
    },
    mocha: {
      timeout: 40000
    }
  }