const networkConfig = {
  31337: {
    name: "localhost",
    wethToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    lendingPoolAddressesProvider: "0xB53C1a33016B2DC2fF3653530bfF1848a515c8c5",
    daiEthPriceFeed: "0x773616E4d11A78F511299002da57A0a94577F1f4",
    daiToken: "0x6b175474e89094c44da98b954eedeac495271d0f",
  },
  // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
  // Default one is ETH/USD contract on Goerli
  5: {
    name: "goerli",
    ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    wethToken: "0x2e3A2fb8473316A02b8A297B982498E661E1f6f5",
    lendingPoolAddressesProvider: "0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D",
    daiEthPriceFeed: "0x22B58f1EbEDfCA50feF632bD73368b2FdA96D541", // from kovan testnet
    daiToken: "0xDF1742fE5b0bFc12331D8EAec6b478DfDbD31464",
  },
};

const developmentChains = ["hardhat", "localhost"];

module.exports = {
  networkConfig,
  developmentChains,
};
