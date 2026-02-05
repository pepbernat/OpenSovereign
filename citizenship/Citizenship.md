# Citizenship Module Specification

## 1. Overview

Citizenship in OpenSovereign is not a birthright but a voluntary agreement. It defines the relationship between the individual and the collective, based on mutual rights and responsibilities.

## 2. Entry Criteria

To become a citizen (Resident), an individual must meet specific criteria ensuring alignment with the community.

* **Identity Verification:** Must hold a valid *CitizenshipCredential* (see [Identity](../identity/Identity.md)).
* **Stake:** A refundable deposit (e.g., 100 OS Tokens) locked in the Governance Contract to prevent Sybil attacks.
* **Sponsorship:** New citizens must be vouched for by 1 existing citizen with a positive Reputation Score.
* **Pledge:** Cryptographic signing of the Social Contract.

## 3. The Social Contract

The Social Contract is a legally binding digital agreement.

> "I, [Name/DID], voluntarily join OpenSovereign. I agree to respect the Non-Aggression Principle, resolve disputes via the Arbitration Module, and contribute to the common infrastructure. I acknowledge my right to exit at any time."

### 3.1. Technical Implementation

The contract is stored as an IPFS hash referenced in the smart contract. Signing it implies:

1. Calling `joinState(ipfsHash)` on the contract.
2. The transaction data includes the user's signature of the hash.

## 4. Reputation System

Reputation is a quantitative measure of a citizen's contribution and trustworthiness.

* **Accrual:**
  * **Participation:** Voting in governance proposals (+1 point).
  * **Service:** Acting as a juror or validator (+5 points).
  * **Peer Review:** Endorsements from other high-reputation citizens.
* **Slashing:**
  * **Malfeasance:** Found guilty in arbitration (-10 to -100 points).
  * **Inactivity:** Gradual decay if inactive for > 1 year.

## 5. Loss of Citizenship

Citizenship can be revoked voluntarily or involuntarily.

* **Voluntary Exit:** A citizen calls `exitState()`.
  * **Result:** Stake is returned (minus outstanding fines). Reputation is frozen.
* **Involuntary Revocation (Exile):**
  * **Trigger:** Committing a severe crime (Violation of Non-Aggression) confirmed by the High Arbitration Court.
  * **Result:** Stake is slashed. Identity is blacklisted.

## 6. Smart Contracts

```solidity
interface ICitizenship {
    function joinState(string calldata contractHash) external payable;
    function exitState() external;
    function slashCitizen(address citizen, uint256 amount, string reason) external onlyArbitrator;
}
```
