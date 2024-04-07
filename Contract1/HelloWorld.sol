// SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

contract myContract{
    string _message;

    constructor(string memory _firstMessage){
        _message = _firstMessage;
    }

    function getMsg() external view returns(string memory){
        return _message;
    }

    function updateMsg(string memory _newMsg) external{
        _message = _newMsg;
    }
}