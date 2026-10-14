def create_alert(scan_result):
    risk_level = scan_result.get("risk_level", "LOW")

    if risk_level == "CRITICAL":
        priority = "URGENT"
    elif risk_level == "HIGH":
        priority = "HIGH"
    elif risk_level == "MEDIUM":
        priority = "MEDIUM"
    else:
        priority = "LOW"

    return {
        "alert_created": risk_level != "LOW",
        "priority": priority,
        "message": (
            f"{risk_level} risk detected. "
            "Review the profile for suspicious activity."
        )
    }
    