const SwapFactory = artifacts.require("SwapFactory");

const adminAddress = "0xe7f890A0CB4c0Cbd68848F26F0998562502323Dc";
const feeCollectingAddress = "0x0380bb57500562DA6Da4789AE9D04669c28243F1";

module.exports = async (deployer) => {
  await deployer.deploy(SwapFactory, adminAddress);

  const contract = await SwapFactory.deployed();

  await contract.setFeeTo(feeCollectingAddress);
};
