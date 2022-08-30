import Link from 'next/link'
//import styles from './sidebar.module.css'

// need to pass in client.isConnected
export default function Nav() {

  const connectWeb3 = async () => {
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
  
  return (
    <nav className="fren-nav d-flex">
      <div className="logo">
        <img src="images/logo.png" alt="MOONCATZ MARKET" />
      </div>
      <div className="d-flex" style={{ marginLeft: "auto" }}>
        <div>
          <button className="btn connect-btn" onClick={connectWeb3}>
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
  )
}