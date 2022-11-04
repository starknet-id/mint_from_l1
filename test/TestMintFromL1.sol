// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// These files are dynamically created at test time
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/MintFromL1.sol"; 
import "../contracts/Price.sol"; 

contract TestMintFromL1 {

  function testInitialBalanceUsingDeployedContract() public {
    MintFromL1 meta = MintFromL1(DeployedAddresses.MintFromL1());

    uint expected = 10000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 MintFromL1 initially");
  }

  function testInitialBalanceWithNewMintFromL1() public {
    MintFromL1 meta = new MintFromL1();

    uint expected = 10000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 MintFromL1 initially");
  }

}
