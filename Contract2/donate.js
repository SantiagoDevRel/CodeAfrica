//import Web3, ABI and bytecode
const { Web3 } = require("web3");
const ABI = require("./abi.json");

//initialize provider
const provider = new Web3("https://eth-sepolia.public.blastapi.io");

async function donate() {
  //setup a wallet
  const wallet = provider.eth.wallet.add("0x1dc0bca5325fb16c9a31859e8ab2f3bbab0bda45d7b12b8d2bfc9ec6d95bd131");

  //initialize contract
  const address = "0xeD106d3F2603a86199CBBFeE937E31735534F161";
  const myContract = new provider.eth.Contract(ABI, address);

  //send tx
  const txReceipt = await myContract.methods.donate().send({
    from: wallet[0].address,
    value: 100000000000000000, //wei
  });

  //show tx receipt
  console.log("Tx hash:", txReceipt.transactionHash);
}

donate();
