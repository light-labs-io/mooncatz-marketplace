//import { ethers } from "ethers";

export const connectWallet = async () => {

  try {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Metamask not detected");
      return;
    }

    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });

    setclient({
      isConnected: true,
      address: accounts[0],
    });
  } catch (error) {
    console.log("Error connecting to metamask", error);
  }

};
