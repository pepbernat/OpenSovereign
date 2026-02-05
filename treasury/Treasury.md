# Treasury Module Specification

## 1. Overview

The Treasury is the financial engine of OpenSovereign. It follows a strict mandate of transparency and minimalism. Funds are only used for maintaining common infrastructure, not for wealth redistribution.

## 2. Revenue Streams

OpenSovereign generates revenue through voluntary usage fees, not forced taxation on income.

* **Transaction Fees:** A small percentage of transactions processed by the network (gas fees).
* **Service Fees:** Fees for using specific services like Arbitration or Identity issuance.
* **Harberger Tax (Optional, Experimental):** Applied only to scarce common resources (e.g., premium namespaces).
* **Donations:** Voluntary contributions to the public good.

## 3. Budgeting & Spending

Spending is proposal-based and requires community approval.

1. **Proposal Submission:** Any citizen can submit a spending proposal detailing amount, recipient, and purpose.
2. **Vetting:** A technical committee verifies the proposal's feasibility and security.
3. **Voting:** Citizens vote. Passing threshold depends on the amount requested (higher amount = higher consensus needed).
4. **Execution:** Approved funds are streamed (via Superfluid or similar) rather than paid in lump sums, allowing cancellation if deliverables aren't met.

## 4. Auditing

* **Real-time Dashboard:** All treasury inflows and outflows are visible on a public block explorer dashboard.
* **Cryptographic Proofs:** Solvency is verifiable on-chain 24/7.
* **Tagging:** every transaction is tagged with a category (Infrastructure, Security, Legal) for easy analysis.

## 5. Smart Contracts

```solidity
interface ITreasury {
    event Deposit(address indexed sender, uint256 amount, string reason);
    event ProposalCreated(uint256 id, address recipient, uint256 amount);
    event ProposalExecuted(uint256 id);

    // Create a spending proposal
    function createProposal(address recipient, uint256 amount, string calldata description) external returns (uint256);

    // Vote on a proposal
    function vote(uint256 proposalId, bool support) external;

    // Execute a passed proposal
    function executeProposal(uint256 proposalId) external;
}
```
