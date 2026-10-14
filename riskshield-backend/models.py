from sqlalchemy import Column, Integer, String, Boolean, DateTime
from datetime import datetime

from database import Base


class Scan(Base):
    __tablename__ = "scans"

    id = Column(Integer, primary_key=True, index=True)

    profile = Column(String, nullable=False)
    username = Column(String, default="")
    bio = Column(String, default="")

    followers = Column(Integer, default=0)
    following = Column(Integer, default=0)

    verified = Column(Boolean, default=False)
    account_age_days = Column(Integer, default=365)

    risk_score = Column(Integer, default=0)
    risk_level = Column(String, default="LOW")

    recommendation = Column(String, default="")

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )