# Contributing Guide

Thank you for your interest in contributing to OpenSovereign!

These guidelines will help make the collaboration process easy and effective.

## How to Contribute

1. ⭐ **Fork** the repository.
2. 📄 Create an **issue** describing your proposal or suggestion.
3. 📦 Create a branch (`feature/my-improvement`).
4. 🛠️ Make your changes.
5. 🔀 Open a **pull request** describing what you are doing and why.

## Development Practices

To maintain a high-quality codebase for our digital state, please follow these practices:

### 1. Branching Strategy

* `main`: Stable, production-ready code.
* `dev`: Integration branch for ongoing development.
* `feature/your-feature-name`: For new features.
* `fix/issue-description`: For bug fixes.
* `docs/doc-name`: For documentation updates.

### 2. Testing

* **Unit Tests:** Required for all smart contracts (`foundry` or `hardhat`) and critical scripts.
* **Coverage:** Aim for >80% coverage on core logic.
* **Run Tests:** Ensure `npm test` or `forge test` passes before pushing.

### 3. Style Guide

* **Solidity:** Follow the [Solidity Style Guide](https://docs.soliditylang.org/en/v0.8.24/style-guide.html).
* **JavaScript/TypeScript:** Use `eslint` with standard config.
* **Markdown:** Use standard Markdown; ensure headings are hierarchical.

## Governance & Constitution Changes

OpenSovereign is living software. To propose changes to the [Constitution](../constitution) or [Governance Model](../governance):

1. **RFC (Request for Comments):** Start a discussion in the *#governance* channel or perform a PR with a `draft` status.
2. **OIP (OpenSovereign Improvement Proposal):** Follow the OIP template (folder `governance/proposals`) to formalize your change.
3. **Vote:** Once reviewed, the proposal moves to an on-chain vote (or signaling snapshot).

## Community Channels

* **Discord:** [Join our Discord](#) (placeholder)
* **Discourse:** [Governance Forum](#) (placeholder)
* **GitHub Discussions:** Use for technical Q&A.

## Code of Conduct

Before contributing, please review `CODE_OF_CONDUCT.md`. We enforce a strict standard of mutual respect appropriate for building a jurisdiction.
