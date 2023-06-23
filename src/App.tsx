import React, { useState, useEffect } from 'react';
import { Types, AptosClient } from 'aptos';
import './App.css';

// Create an AptosClient to interact with devnet.
const client = new AptosClient('https://fullnode.devnet.aptoslabs.com/v1');

function App() {
  // Retrieve aptos.account on initial render and store it.
  const [address, setAddress] = useState<string | null>(null);
  const [account, setAccount] = useState<Types.AccountData | null>(null);
  /**
   * init function
   */
  const init = async() => {
    // connect
    const { address, publicKey } = await window.aptos.connect();
    setAddress(address);
  }

  useEffect(() => {
    init();
  }, []);
  
  useEffect(() => {
    if (!address) return;
    client.getAccount(address).then(setAccount);
  }, [address]);

  return (
    <div className="App">
      <p>Account Address: <code>{ address }</code></p>
      <p>Sequence Number: <code>{ account?.sequence_number }</code></p>
    </div>
  );
}

export default App;