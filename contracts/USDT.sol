// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract USDT is ERC20, Ownable {
    constructor(address initialAccount) ERC20("Tether USD", "USDT") Ownable(initialAccount) {
        _mint(initialAccount, 1_000_000 * 10 ** decimals());
    }
}