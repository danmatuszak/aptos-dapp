import React from 'react';
import './App.css';

function App() {
  // Retrieve aptos.account on initial render and store it.
  const [address, setAddress] = React.useState<string | null>(null);
  
  /**
   * init function
   */
  const init = async() => {
    // connect
    const { address, publicKey } = await window.aptos.connect();
    setAddress(address);
  }
  
  React.useEffect(() => {
     init();
  }, []);

  return (
    <div className="App">
      <p>Account Address: <code>{ address }</code></p>
    </div>
  );
}

export default App;