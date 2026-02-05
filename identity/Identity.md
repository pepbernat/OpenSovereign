# Identity Module Specification

## 1. Overview

The Identity Module is the foundation of OpenSovereign. It allows individuals to interact with the state without surrendering ownership of their digital self. It is based on **Self-Sovereign Identity (SSI)** principles.

## 2. DID Method

OpenSovereign utilizes a decentralized identifier (DID) method ensuring interoperability and security.

* **Method:** `did:os` (OpenSovereign) or compatible `did:ethr` / `did:key`.
* **Format:** `did:os:<network>:<public-key-hash>`
* **Resolver:** A public, permissionless resolver hosted on the OpenSovereign blockchain and mirrored via HTTP gateways.

## 3. Verifiable Credentials (VCs)

We use the W3C Verifiable Credentials standard.

### 3.1. Citizenship Credential

Issued upon completing the onboarding process.

```json
{
  "@context": ["https://www.w3.org/2018/credentials/v1", "https://opensovereign.org/context/v1"],
  "type": ["VerifiableCredential", "CitizenshipCredential"],
  "issuer": "did:os:governance-contract",
  "issuanceDate": "2026-03-01T19:23:24Z",
  "credentialSubject": {
    "id": "did:os:user-did",
    "citizenshipType": "Resident",
    "rights": ["vote", "transact", "dispute"],
    "goodStanding": true
  },
  "proof": { ... }
}
```

### 3.2. Reputation Credential

Dynamic credential updated periodically or on-event.

```json
{
  "type": ["VerifiableCredential", "ReputationScore"],
  "credentialSubject": {
     "id": "did:os:user-did",
     "score": 850,
     "level": "Gold",
     "lastUpdated": "2026-04-15"
  }
}
```

## 4. Onboarding Flows

### 4.1. Web3 Native

1. **Connect Wallet:** User connects Metamask/Rabby.
2. **Sign Intent:** User signs a message "Requesting OpenSovereign Citizenship".
3. **Deposit Stake:** User deposits required collateral (if applicable) into the Governance Contract.
4. **Issue DID:** System registers `did:os` mapped to the wallet address.
5. **Receive VC:** User receives Citizenship Credential into their wallet.

### 4.2. OIDC Bridge (Web2 Friendly)

For users without a pre-existing wallet, we use an OIDC wrapper.

1. **Login:** User logs in via email/provider (handled by a non-custodial gateway).
2. **Key Gen:** A simplified wallet is generated locally in the browser (e.g., via Passkeys).
3. **DID Creation:** Same registration process on-chain.

## 5. Smart Contracts Interface

The Identity Registry coordinates these logic flows.

```solidity
interface IIdentityRegistry {
    event IdentityRegistered(address indexed owner, string did);
    event CredentialIssued(bytes32 indexed claimHash, address indexed subject);

    // Registers a new DID for the caller
    function registerIdentity() external;

    // Issues a credential hash on-chain for verification
    function issueCredential(address subject, bytes32 claimHash) external onlyAuthority;

    // Checks if an address is a valid citizen
    function isCitizen(address user) external view returns (bool);
}
```
