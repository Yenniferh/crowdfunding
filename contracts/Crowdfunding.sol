// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Crowdfunding {
  address payable owner;
  uint goal;
  uint collected;
  bool isFundable;

  constructor() {
    owner = payable(msg.sender);
    goal = 1000000000;
    collected = 0;
    isFundable = true;
  }

  function contribute() public payable {
    if (isFundable) {
      collected += msg.value;
      if (collected >= goal) {
        isFundable = false;
      }
    }
  }

  function getOwner() public view returns (address) {
    return owner;
  }

  function getGoal() public view returns (uint) {
    return goal;
  }

  function getCollected() public view returns (uint) {
    return collected;
  }

  function getIsFundable() public view returns (bool) {
    return isFundable;
  }
}