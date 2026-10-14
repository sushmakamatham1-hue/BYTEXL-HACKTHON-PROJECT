def calculate_risk(
    username="",
    bio="",
    followers=0,
    following=0,
    verified=False,
    account_age_days=365
):
    score = 0
    reasons = []

    username = username.lower().strip()
    bio = bio.lower().strip()

    # 1. Suspicious keywords
    suspicious_keywords = [
        "official",
        "support",
        "customer care",
        "giveaway",
        "free money",
        "investment",
        "crypto",
        "urgent",
        "claim reward",
        "send money",
        "otp",
        "bank details"
    ]

    found_keywords = [
        word for word in suspicious_keywords
        if word in username or word in bio
    ]

    if found_keywords:
        score += min(len(found_keywords) * 10, 30)
        reasons.append(
            "Suspicious keywords detected: "
            + ", ".join(found_keywords)
        )

    # 2. Unverified account
    if not verified:
        score += 10
        reasons.append("Account is not verified")

    # 3. Very new account
    if account_age_days < 30:
        score += 25
        reasons.append("Account is very new")

    elif account_age_days < 90:
        score += 15
        reasons.append("Account has limited history")

    # 4. Follower / following ratio
    if following > 0:
        ratio = followers / following

        if ratio < 0.1:
            score += 15
            reasons.append(
                "Unusual follower-to-following ratio"
            )

    # 5. Suspicious username patterns
    suspicious_patterns = [
        "official",
        "help",
        "support",
        "admin",
        "verify"
    ]

    if any(pattern in username for pattern in suspicious_patterns):
        score += 10
        reasons.append(
            "Username contains a high-risk identity pattern"
        )

    # Keep score within 0–100
    score = min(score, 100)

    # Severity according to project specification
    if score <= 24:
        risk_level = "LOW"
    elif score <= 49:
        risk_level = "MEDIUM"
    elif score <= 74:
        risk_level = "HIGH"
    else:
        risk_level = "CRITICAL"

    if not reasons:
        reasons.append("No major risk indicators detected")

    # Recommendation
    if risk_level == "CRITICAL":
        recommendation = "Start an investigation immediately"
    elif risk_level == "HIGH":
        recommendation = "Investigate the profile and monitor closely"
    elif risk_level == "MEDIUM":
        recommendation = "Monitor the profile for additional suspicious activity"
    else:
        recommendation = "Continue monitoring"

    return {
        "risk_score": score,
        "risk_level": risk_level,
        "reasons": reasons,
        "recommendation": recommendation
    }
    