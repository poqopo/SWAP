const SwapRouterV2 = artifacts.require("SwapRouterV2");

const factoryAddress = "0x0C82903f87ed821e1B75ab78C5b96C136d797C91";
const WETH = "0xc778417e063141139fce010982780140aa0cd5ab";

module.exports = async (deployer) => {
  await deployer.deploy(SwapRouterV2, factoryAddress, WETH);
};
