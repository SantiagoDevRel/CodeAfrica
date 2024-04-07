import "./App.css";
import { Web3 } from "web3";
import abi from "./abi.json";
import { useState } from "react";

function App() {
  const [wallet, setWallet] = useState("0x..");
  const [balance, setBalance] = useState("0");
  let contract,
    web3,
    accounts = {};

  async function connect() {
    web3 = new Web3(window.ethereum);
    accounts = await web3.eth.requestAccounts();
    //you can print this in console or update state and show the connected wallet
    console.log("accounts connected:", accounts[0]);
    setWallet(accounts[0]);

    //MODIFY address
    contract = new web3.eth.Contract(abi, "0xeD106d3F2603a86199CBBFeE937E31735534F161");
  }

  async function getBalance() {
    await connect();
    const balance = await contract.methods.getBalance().call();
    //you can print this in console or update state and show the connected wallet
    console.log("current balance:", balance);
    setBalance(String(balance));
  }

  async function withdraw() {
    await connect();
    const txReceipt = await contract.methods.withdraw().send({ from: accounts[0] });
    console.log("Tx hash:", txReceipt.transactionHash);
  }

  async function donate() {
    await connect();
    const txReceipt = await contract.methods.donate().send({ from: accounts[0], value: 1 }); //1 wei
    console.log("Tx hash:", txReceipt.transactionHash);
  }

  return (
    <div className="App">
      <button onClick={connect}>Connect</button>
      <button onClick={getBalance}>Get Balance</button>
      <button onClick={withdraw}>Withdraw</button>
      <button onClick={donate}>Donate</button>
      <p>Connected wallet: {wallet}</p>
      <p>Balance: {balance}</p>
    </div>
  );
}

export default App;
