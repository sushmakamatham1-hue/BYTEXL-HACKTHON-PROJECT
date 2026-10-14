from pydantic import BaseModel

class ScanRequest(BaseModel):
    username: str
    bio: str = ""
    followers: int = 0
    following: int = 0
    verified: bool = False
    account_age_days: int = 0
    profile: str = ""

class ScanResponse(BaseModel):
    success: bool
    profile: str
    risk_score: float
    risk_level: str
    reasons: list[str]
    recommendation: str
    