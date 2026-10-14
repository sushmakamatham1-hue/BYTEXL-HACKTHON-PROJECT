def create_investigation(scan_result):
    risk_level = scan_result.get("risk_level", "LOW")

    if risk_level in ["HIGH", "CRITICAL"]:
        status = "OPEN"
        priority = "HIGH"
    elif risk_level == "MEDIUM":
        status = "REVIEW"
        priority = "MEDIUM"
    else:
        status = "CLOSED"
        priority = "LOW"

    return {
        "investigation_created": risk_level in ["HIGH", "CRITICAL"],
        "status": status,
        "priority": priority,
        "risk_level": risk_level
    }