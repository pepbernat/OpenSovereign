# Guardian Registry

This document serves as the off-chain specification for the on-chain Guardian Registry contract. It tracks the current members of the Guardian Council, their public keys, and term expiration.

## Current Council (Epoch 1)

| Name/Alias | DID | Public Key (Ed25519) | Term Expires |
| :--- | :--- | :--- | :--- |
| **Alice (Chair)** | `did:os:alice` | `0x123...abc` | 2027-12-31 |
| **Bob** | `did:os:bob` | `0x456...def` | 2026-12-31 |
| **Charlie** | `did:os:charlie` | `0x789...ghi` | 2027-12-31 |
| **Diana** | `did:os:diana` | `0xabc...jkl` | 2026-12-31 |
| **Evan** | `did:os:evan` | `0xdef...mno` | 2027-12-31 |

## Operational Rules

### 1. Rotation

Terms are staggered so that ~50% of the council is up for election every year. This ensures continuity while allowing for regular democratic renewal.

### 2. Emergency Keys

In case of a catastrophic bug in the core governance contract, 4-of-5 Guardians must sign a transaction to pause specific modules (Circuit Breaker).

### 3. Diversity Constraint

No more than 2 Guardians may be affiliated with the same external corporate entity or organization. Violation of this rule results in automatic disqualification of the newest member.
