# Arbitration Module Specification

## 1. Overview

The Arbitration Module (Justice System) is the mechanism for resolving disputes between citizens without relying on centralized courts. It prioritizes restitution over punishment and uses a decentralized jury system.

## 2. Types of Disputes

1. **Contractual Disputes:** Breach of smart contracts or off-chain service agreements (e.g., freelancing, sales).
2. **Conduct Violations:** Breaches of the Non-Aggression Principle (e.g., harassment, fraud).
3. **Governance Challenges:** Contesting a governance proposal as unconstitutional.

## 3. The Resolution Process

### 3.1. Phase 1: Automated Mediation (Optional)

Parties can opt for an algorithmic mediator (AI or simple logic) to suggest a settlement. If accepted, the dispute ends.

### 3.2. Phase 2: Decentralized Arbitration (Kleros-style)

If mediation fails, the dispute goes to a jury.

* **Staking:** Both parties deposit a fee. The loser pays.
* **Juror Selection:** Jurors are selected pseudo-randomly from a pool of citizens staking reputation/tokens.
* **Evidence:** Parties upload encrypted evidence to IPFS.
* **Voting:** Jurors vote on the outcome. The majority rules.

### 3.3. Phase 3: Appeal

A losing party can appeal to a larger jury pool by paying a significantly higher fee. This process can repeat until the cost is prohibitive or the "High Court" (Constitution Guardians) is reached.

## 4. Execution of Decisions

* **Smart Contract Escrows:** For contractual disputes, funds in escrow are automatically released based on the ruling.
* **Reputation Slashing:** For conduct violations, the offender's reputation is slashed automatically.
* **Exile:** In extreme cases, the decision triggers the `slashCitizen` function in the Citizenship module.

## 5. Jurors

* **Incentives:** Jurors earn arbitration fees for honest voting (coherence with the majority).
* **Penalties:** Jurors who vote incoherently lose their staked tokens/reputation.
