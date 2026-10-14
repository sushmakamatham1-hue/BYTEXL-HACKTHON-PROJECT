
from risk_engine import calculate_risk


def scan_profile(data):
    result = calculate_risk(
        username=data.username,
        bio=data.bio,
        followers=data.followers,
        following=data.following,
        verified=data.verified,
        account_age_days=data.account_age_days
    )

    return result
