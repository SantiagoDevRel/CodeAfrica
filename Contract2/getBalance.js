//import Web3, ABI and bytecode
const { Web3 } = require("web3");
const ABI = require("./abi.json");

//initialize provider
const provider = new Web3("https://eth-sepolia.public.blastapi.io");

async function getBalance() {
  //initialize contract
  const address = "0xeD106d3F2603a86199CBBFeE937E31735534F161";
  const myContract = new provider.eth.Contract(ABI, address);

  //make call
  const result = await myContract.methods.getBalance().call();

  //show result
  console.log("balance:", result);
}

getBalance();
