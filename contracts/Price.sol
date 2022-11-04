// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// A library is like a contract with reusable code, which can be called by other contracts.
// Deploying common code can reduce gas costs.
library Price {
    uint256 constant simple_alphabet_size = 38;
    uint256 constant complex_alphabet_size = 2;
    event Domain(uint256 domain);

    function compute_buy_price(uint256 domain, uint256 duration_days)
        external
        returns (uint256 price)
    {

        // // Calculate price depending on number of characters
        uint256 number_of_character = get_amount_of_chars(domain);
        uint256 price_per_day_eth = get_price_per_day(number_of_character);
        uint256 days_to_pay = get_days_to_pay(duration_days);
        
        return days_to_pay * price_per_day_eth;
    }

    function get_amount_of_chars(uint256 domain)
        private
        returns (uint256 number_of_character)
    {

        emit Domain(domain);

        if (domain == 0) {
            return 0;
        }

         uint256 remainder = domain % simple_alphabet_size;

        if (remainder == 37) {
            uint256 next = get_amount_of_chars(remainder / complex_alphabet_size);
            return 1 + next;
        } else {
            uint256 next = get_amount_of_chars(remainder);
            return 1 + next;
        }
    }

    function get_days_to_pay(uint256 duration_days)
        private
        pure
        returns (uint256 days_to_pay)
    {

        if (1824  < duration_days) {
            return (duration_days - 730);
        }

        if (1094  < duration_days) {
            return (duration_days - 365);
        }

        return duration_days;
    }

    function get_price_per_day(uint256 number_of_character)
        private
        pure
        returns (uint256 price)
    {
        if (number_of_character == 1) {
            return (1068493150684932);
        }

        if (number_of_character == 2) {
            return (1024657534246575);
        }

        if (number_of_character == 3) {
            return (931506849315068);
        }

        if (number_of_character == 4) {
            return (232876712328767);
        }

        return (24657534246575);

    }

    function getDivided(uint numerator, uint denominator) private pure returns(uint quotient, uint remainder) {
        quotient  = numerator / denominator;
        remainder = numerator - denominator * quotient;

        return (quotient, remainder);
    }

}
