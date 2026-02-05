// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title IdentityRegistry
 * @dev Simple implementation of a Self-Sovereign Identity registry for OpenSovereign.
 * Allows users to register a Decentralized Identifier (DID) and authorities to issue credentials.
 */
contract IdentityRegistry {
    // Event emitted when a new identity is registered
    event IdentityRegistered(address indexed owner, string did);
    
    // Event emitted when a credential hash is issued/verified on-chain
    event CredentialIssued(bytes32 indexed claimHash, address indexed subject, address indexed issuer);

    // Mapping from wallet address to their DID string
    mapping(address => string) public dids;
    
    // Mapping from a claim hash to its validity (for on-chain verification)
    mapping(bytes32 => bool) public validClaims;
    
    // Role management (simplified for example)
    address public authority;

    constructor() {
        authority = msg.sender;
    }

    modifier onlyAuthority() {
        require(msg.sender == authority, "Caller is not the authority");
        _;
    }

    /**
     * @notice Registers a DID for the calling wallet.
     * @param _did The DID string (e.g., "did:os:ethereum:0x123...")
     */
    function registerIdentity(string calldata _did) external {
        // Enforce basic format check (optional but recommended)
        // In a real system, we might enforce that msg.sender matches the DID suffix
        
        dids[msg.sender] = _did;
        emit IdentityRegistered(msg.sender, _did);
    }

    /**
     * @notice Issues a verifiable credential hash on-chain.
     * @dev Only the authority can issue credentials in this simplified model.
     * @param _subject The address the credential belongs to.
     * @param _claimHash The hash of the off-chain credential JSON.
     */
    function issueCredential(address _subject, bytes32 _claimHash) external onlyAuthority {
        validClaims[_claimHash] = true;
        emit CredentialIssued(_claimHash, _subject, msg.sender);
    }

    /**
     * @notice Checks if an address has a registered DID.
     * @param _user The address to check.
     * @return True if the user has a DID, false otherwise.
     */
    function hasIdentity(address _user) external view returns (bool) {
        return bytes(dids[_user]).length > 0;
    }

    /**
     * @notice Verifies if a specific claim hash is valid.
     * @param _claimHash The hash to verify.
     * @return True if valid.
     */
    function verifyClaim(bytes32 _claimHash) external view returns (bool) {
        return validClaims[_claimHash];
    }
}
