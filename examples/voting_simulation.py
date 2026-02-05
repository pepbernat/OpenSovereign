


def calculate_voting_power(identity_valid, reputation_score, stake_amount, lock_duration_months):
    """
    Calculates Voting Power (VP) based on the OpenSovereign Governance Model.
    
    Formula:
    VP = (Identity_Score * 1) + (Reputation_Score * 0.5) + (Time_Locked_Stake_Multiplier)
    
    Where Time_Locked_Stake_Multiplier is derived from:
    Base Stake * (1 + (Lock Duration / Max Duration))
    """
    
    # 1. Identity Score
    # 100 VP for a valid DID, 0 otherwise
    vp_identity = 100 if identity_valid else 0
    
    # 2. Reputation Score
    # Weights 0.5 per reputation point
    vp_reputation = reputation_score * 0.5
    
    # 3. Time-Locked Stake
    # Max lock duration for max multiplier (e.g., 48 months = 4 years)
    MAX_LOCK_MONTHS = 48
    MAX_MULTIPLIER = 2.0
    
    # Clamp lock duration to max
    effective_duration = min(lock_duration_months, MAX_LOCK_MONTHS)
    
    # Multiplier goes linearly from 1.0 (no lock) to 2.0 (4 year lock)
    # Actually, usually 0 lock = 1x multiplier.
    # Let's say: Multiplier = 1 + (effective_duration / MAX_LOCK_MONTHS)
    multiplier = 1 + (effective_duration / MAX_LOCK_MONTHS)
    
    # We apply a logarithmic dampener or cap to the raw stake amount to prevent whales from dominating?
    # For this simulation, let's assume raw stake * multiplier, but let's cap the stake contribution 
    # to avoid the plutocracy problem mentioned in the governance model.
    # Governace Model says: "Economic power (tokens) does not equal political power."
    # So maybe the stake part is capped at a max VP, e.g., max 500 VP from stake.
    
    vp_stake_raw = stake_amount * multiplier
    
    # Hard Cap for Stake Influence (Anti-Plutocracy)
    STAKE_VP_CAP = 500
    vp_stake = min(vp_stake_raw, STAKE_VP_CAP)
    
    total_vp = vp_identity + vp_reputation + vp_stake
    
    return {
        "Total VP": total_vp,
        "Breakdown": {
            "Identity": vp_identity,
            "Reputation": vp_reputation,
            "Stake": vp_stake
        }
    }

def run_simulation():
    print("--- OpenSovereign Voting Power Simulation ---\n")
    
    scenarios = [
        {
            "name": "New Citizen (Low Stake, No Rep)",
            "identity": True,
            "reputation": 0,
            "stake": 10,
            "lock": 0
        },
        {
            "name": "Active Contributor (Low Stake, High Rep)",
            "identity": True,
            "reputation": 400, # 400 * 0.5 = 200 VP
            "stake": 10,
            "lock": 0
        },
        {
            "name": "Passive Whale (High Stake, No Rep, Short Lock)",
            "identity": True,
            "reputation": 0,
            "stake": 1000, # Capped at 500 VP
            "lock": 1
        },
        {
            "name": "Committed Founder (Med Stake, High Rep, Long Lock)",
            "identity": True,
            "reputation": 500, # 250 VP
            "stake": 200, 
            "lock": 48 # Multiplier 2x -> 400 VP from stake
        }
    ]
    
    for s in scenarios:
        result = calculate_voting_power(s["identity"], s["reputation"], s["stake"], s["lock"])
        print(f"Scenario: {s['name']}")
        print(f"  Inputs: Rep={s['reputation']}, Stake={s['stake']}, Lock={s['lock']}m")
        print(f"  Resulting VP: {result['Total VP']:.2f}")
        print(f"  Breakdown: {result['Breakdown']}")
        print("-" * 30)

if __name__ == "__main__":
    run_simulation()
