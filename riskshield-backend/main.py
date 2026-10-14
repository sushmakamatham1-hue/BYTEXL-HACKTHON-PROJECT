from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import Base, engine, get_db
from schemas import ScanRequest, ScanResponse
from models import Scan
from services.scanner import scan_profile


# Create database tables
Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="RiskShield AI",
    description="Digital Risk Protection Platform",
    version="1.0.0"
)


# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "RiskShield AI Backend is running",
        "status": "protected"
    }


@app.get("/api/health")
def health():
    return {
        "status": "online",
        "monitoring": "24/7",
        "ai_engine": "active"
    }


@app.post("/api/scan", response_model=ScanResponse)
def scan_profile_api(
    data: ScanRequest,
    db: Session = Depends(get_db)
):
    # Run risk engine
    result = scan_profile(data)

    # Save scan to database
    scan = Scan(
        profile=data.profile,
        username=data.username,
        bio=data.bio,
        followers=data.followers,
        following=data.following,
        verified=data.verified,
        account_age_days=data.account_age_days,
        risk_score=result["risk_score"],
        risk_level=result["risk_level"],
        recommendation=result["recommendation"]
    )

    db.add(scan)
    db.commit()
    db.refresh(scan)

    return {
        "success": True,
        "profile": data.profile,
        "risk_score": result["risk_score"],
        "risk_level": result["risk_level"],
        "reasons": result["reasons"],
        "recommendation": result["recommendation"]
    }