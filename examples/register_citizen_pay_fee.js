/**
 * citizenship_flow.js
 * 
 * This script demonstrates the interaction flow between:
 * 1. Identity Registry (registering a DID)
 * 2. Governance/Citizenship Contract (joining the state)
 * 3. Treasury (paying a fee)
 * 
 * NOTE: This relies on ethers.js and assumes a local Hardhat/Foundry node running.
 * Usage: node citizenship_flow.js
 */

const { ethers } = require("ethers");

// MOCK ABI definitions (simplified for the example)
const IDENTITY_ABI = [
  "function registerIdentity(string calldata _did) external",
  "event IdentityRegistered(address indexed owner, string did)"
];

const CITIZENSHIP_ABI = [
  "function joinState(string calldata contractHash) external payable",
  "event CitizenJoined(address indexed citizen)"
];

const TREASURY_ABI = [
  "function payFee(string calldata reason) external payable",
  "event PaymentReceived(address indexed sender, uint256 amount, string reason)"
];

async function main() {
    // 1. Setup Provider & Wallet
    // connect to local node
    const provider = new ethers.JsonRpcProvider("http://localhost:8545");
    
    // In a real app, this would be the user's private key or connected wallet
    // Using a typically default hardhat account
    const wallet = new ethers.Wallet("0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80", provider);
    
    console.log(`Acting as User: ${wallet.address}`);

    // 2. Addresses (Placeholder addresses - replace with actual deployed contracts)
    const IDENTITY_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const CITIZENSHIP_ADDRESS = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
    const TREASURY_ADDRESS = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

    // 3. Contract Instances
    const identityContract = new ethers.Contract(IDENTITY_ADDRESS, IDENTITY_ABI, wallet);
    const citizenshipContract = new ethers.Contract(CITIZENSHIP_ADDRESS, CITIZENSHIP_ABI, wallet);
    const treasuryContract = new ethers.Contract(TREASURY_ADDRESS, TREASURY_ABI, wallet);

    try {
        // --- STEP A: Register Identity ---
        console.log("\n--- Step A: Registering Identity ---");
        const did = `did:os:eth:${wallet.address}`;
        console.log(`Registering DID: ${did}`);
        
        const tx1 = await identityContract.registerIdentity(did);
        await tx1.wait();
        console.log("Identity Registered successfully!");

        // --- STEP B: Join Citizenship ---
        console.log("\n--- Step B: Joining Citizenship ---");
        const socialContractHash = "QmXyZ..."; // IPFS hash of the social contract
        const stakeAmount = ethers.parseEther("0.1"); // Required stake/deposit
        
        console.log(`Signing Social Contract (${socialContractHash}) and staking ${ethers.formatEther(stakeAmount)} ETH...`);
        
        const tx2 = await citizenshipContract.joinState(socialContractHash, { value: stakeAmount });
        await tx2.wait();
        console.log("Welcome! Citizenship acquired.");

        // --- STEP C: Pay Treasury Fee (e.g., for passport issuance) ---
        console.log("\n--- Step C: Paying Treasury Fee ---");
        const feeAmount = ethers.parseEther("0.05");
        const reason = "Passport Issuance Fee";
        
        console.log(`Sending ${ethers.formatEther(feeAmount)} ETH to Treasury for '${reason}'...`);
        
        const tx3 = await treasuryContract.payFee(reason, { value: feeAmount });
        await tx3.wait();
        console.log("Payment confirmed. Transaction complete.");

    } catch (error) {
        console.error("An error occurred during the flow:", error);
    }
}

// Check if running directly
if (require.main === module) {
    main();
}
