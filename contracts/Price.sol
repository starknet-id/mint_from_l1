// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// A library is like a contract with reusable code, which can be called by other contracts.
// Deploying common code can reduce gas costs.
library Price {
    function compute_price(uint256 domain, uint256 duration_days)
        public
        pure
        returns (uint256 price)
    {
        return 1;
    }
}
