// SPDX-License-Identifier: MIT
// Tells the Solidity compiler to compile only from v0.8.13 to v0.9.0
pragma solidity ^0.8.13;

import "./Price.sol";

// This is just a simple example of a coin-like contract.
// It is not ERC20 compatible and cannot be expected to talk to other
// coin/token contracts.

contract MetaCoin {
    // Payable address can receive Ether
    address payable public owner;

    constructor(address ownerValue) {
        owner = payable(ownerValue);
    }

    function deposit() public payable {}

    function withdraw() public {
        // get the amount of Ether stored in this contract
        uint256 amount = address(this).balance;

        // send all Ether to owner
        // Owner can receive Ether since the address of owner is payable
        (bool success, ) = owner.call{value: amount}("");
        require(success, "Failed to send Ether");
    }

	    // Function to transfer Ether from this contract to address from input
    function purchase(uint domain, address payable _to, uint amount) public {

		assert msg.value > Price.compute_price(domain);

    }
}
