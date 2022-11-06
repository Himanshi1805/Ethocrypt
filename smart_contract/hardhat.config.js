// https://eth-goerli.g.alchemy.com/v2/LUULc-TKOpNTuZFlGFoiK6Q1pdWb4B9A

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/LUULc-TKOpNTuZFlGFoiK6Q1pdWb4B9A',
      accounts: ['ba6a29139829691c4646b181ad2bcf2c33cdfc91733f88960ed3545d924afd3c'],
    },
  },
};