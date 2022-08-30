import { useState, useEffect } from "react";
import Link from 'next/link'
import { connectWallet } from "../utils/connectWallet";

export default function connectWalletButton() {

  return (
    <button className="btn connect-btn" onClick={() => connectWallet}>
      {client.isConnected ? (
        <>
          {client.address.slice(0, 4)}...
          {client.address.slice(38, 42)}
        </>
      ) : (
        <>Connect Wallet</>
      )}
    </button>
  )
}