import { useState, useEffect } from "react";
import { ethers } from "ethers";
//import { fsPromises } from 'fs/promises';
//import { path } from 'path';
//import { signMessage } from "../utils/sign";
// import { resize } from "../utils/windowResizeHandler.js";

import Link from "next/link";
import Room from "../components/room";
import Metamask from "../components/metamask";
import RoomAssets from "../utils/roomAssets.json"
//import Nav from "../components/nav";

const Index = () => {
  const [haveMetamask, setHaveMetamask] = useState(true);

  const [client, setClient] = useState({
    isConnected: false,
  });

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Metamask not detected");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setClient({
        isConnected: true,
        address: accounts[0],
      });
    } catch (error) {
      console.log("Error connecting to metamask", error);
    }
  }


  const checkConnection = async () => {
    const { ethereum } = window;
    if (ethereum) {
      setHaveMetamask(true);
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        setClient({
          isConnected: true,
          address: accounts[0],
        });
        getBalance(client.address);
        // getMooncatzBalance(client.address);
      } else {
        setClient({
          isConnected: false,
        });
      }
    } else {
      setHaveMetamask(false);
    }
  };

  const getBalance = async (address) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(address);
    const balanceInEth = ethers.utils.formatEther(balance);
    console.log(address);
    console.log(balanceInEth);
  };

  const getMooncatzBalance = async (address) => {
    // Mooncatz contract:
    // 0x12b180b635dD9f07a78736fB4E43438fcdb41555

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const abi = [
      "event Transfer(address from, address to, uint amount)",
      "function transfer(address to, uint amount)",
      "function symbol() view returns (string)"
    ];
    const signer = provider.getSigner();
    const contract = new ethers.Contract(address, abi, signer);

    // read method
    const tokenId = 1;
    contract.tokenURI(tokenId)
      .then((uri) => console.log('token uri from contract', uri)
      .catch((err) => error(err)));
  };

  const getRoomAssets = () => {
    let assetCats = [];
    for (let i = 0; i < RoomAssets.children[0].children.length; i++) {
      assetCats.push(RoomAssets.children[0].children[i].name);
    }
    console.log(assetCats);
  }

  getRoomAssets();

  useEffect(() => {
    checkConnection();
    window.onresize = (e) => {
      // Keeps Menu Items Square
      let menuItems = document.getElementsByClassName("menuItem");
      for (let i = 0; i < menuItems.length; i++){
        menuItems[i].style.height = (menuItems[i].offsetWidth + "px");
      };
    };

  }, []);

  return (
    <>
      <nav className="fren-nav d-flex">
        <div class="logo">
          <img src="images/logo.png" alt="MOONCATZ MARKET" />
        </div>
        <div className="d-flex" style={{ marginLeft: "auto" }}>
          <div>
            <button className="btn connect-btn" onClick={connectWallet}>
              {client.isConnected ? (
                <>
                  {client.address.slice(0, 4)}...
                  {client.address.slice(38, 42)}
                </>
              ) : (
                <>Connect Wallet</>
              )}
            </button>
          </div>
        </div>
      </nav>



      <section className="container">
        <main>
          {/* ---- */}
          <div className="grid">
            <Room />
            <div className="itemMenu">
              <div className="itemMenuBorder">
                <ul className="itemList">
                  <li className="menuItem"><button>Beds</button></li>
                  <li className="menuItem"><button>Desks</button></li>
                  <li className="menuItem"><button>Chairs</button></li>
                  <li className="menuItem"><button>Paintings</button></li>
                  <li className="menuItem"><button>Plants</button></li>
                  <li className="menuItem"><button>Wallpaper</button></li>
                </ul>
              </div>
            </div>
          </div>

          {/* ---- */}
        </main>
      </section>
    </>
  );
};

export default Index;
