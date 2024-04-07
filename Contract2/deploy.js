//import Web3, ABI and bytecode
const { Web3 } = require("web3");
const ABI = require("./abi.json");
const BYTECODE = require("./bytecode.json");

//initialize provider
const provider = new Web3("https://eth-sepolia.public.blastapi.io");

async function deploy() {
  //set a wallet
  const wallet = provider.eth.wallet.add("0x1dc0bca5325fb16c9a31859e8ab2f3bbab0bda45d7b12b8d2bfc9ec6d95bd131");

  //initialize contract
  const myContract = new provider.eth.Contract(ABI);

  //set contract deployer
  const deployer = myContract.deploy({
    data: BYTECODE,
    arguments: ["0xfB6eE09bb37311813e474Ea19a963d6891689179"],
  });

  //send tx
  const txReceipt = await deployer.send({ from: wallet[0].address });

  //show deployed address
  console.log(txReceipt.options.address);
}

deploy();
