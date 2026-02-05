# Functional Examples

This directory contains reference implementations and examples to demonstrate the core modules of OpenSovereign.

## Contents

### 1. Identity Registry (IdentityRegistry.sol)

A Solidity smart contract implementing basic Self-Sovereign Identity (SSI) logic.

- Allows users to register a DID.
- Allows authority to create credentials.

### 2. Registration & Payment Script (register_citizen_pay_fee.js)

A JavaScript (Node.js) script simulating user flow:

- Registers an identity.
- Signs social contract to join Citizenship.
- Pays a fee to Treasury.

**Usage:**

```bash
npm install
node register_citizen_pay_fee.js
```

### 3. Voting Simulation (voting_simulation.py)

A Python script calculating Voting Power based on the governance model.

- Demonstrates how "Skin in the Game" (Locked Stake) and Reputation affect voting weight.

**Usage:**

```bash
python3 voting_simulation.py
```
