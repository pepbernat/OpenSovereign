# Governance Model v0.1

OpenSovereign aims to solve the "plutocracy problem" of traditional DAOs (where 1 token = 1 vote) and the "inefficiency problem" of traditional democracies.

## 1. Core Principles

- **No Plutocracy:** Economic power (tokens) does not equal political power.
- **Sybil Resistance:** One human, one voice (weighted).
- **Skin in the Game:** participation requires long-term commitment.
- **Exit > Voice:** The ultimate check on power is the ease of leaving the jurisdiction.

## 2. Voting Power Formula

Voting power (VP) is dynamically calculated:

`VP = (Identity_Score * 1) + (Reputation_Score * 0.5) + (Time_Locked_Stake_Multiplier)`

### 2.1. Identity Score (Proof of Humanity)

- Validated unique human (DID): Base 100 VP.
- Unverified account: 0 VP (cannot vote on governance, only economic interactions).

### 2.2. Reputation Score (Meritocracy)

- Earned by contributing to the state (code, arbitration, community service).
- Non-transferable.
- Decays over time (must maintain activity).

### 2.3. Time-Locked Stake

- Tokens can be staked to show commitment.
- **Multiplier Effect:** Staking for 4 years gives more weight than staking for 1 week.
- **Cap:** Staking impact is capped to prevent whale dominance (e.g., max 2x multiplier).

## 3. Proposal System (The "State API")

Governing is executing transactions on the state kernel.

### 3.1. Proposal Lifecycle

1. **Draft:** Off-chain discussion.
2. **Sponsor:** Must be sponsored by a citizen with high reputation.
3. **Deposit:** Anti-spam fee (returned if proposal passes or gets min % votes).
4. **Voting:** Quadratic Voting (QV) window.
5. **Execution:** Automatic via smart contract or Multisig veto (Constitution Guardians).

## 4. Checks and Balances

- **The Constitution:** Immutable core rules (hard fork required to change).
- **Guardian Council:** A small elected group with *veto-only* power to stop unconstitutional proposals. They cannot initiate proposals.
- **Citizen Veto:** A supermajority of citizens can override the Council.
