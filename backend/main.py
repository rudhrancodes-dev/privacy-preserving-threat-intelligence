from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from ml_engine.threat_detection import ThreatDetector

app = FastAPI(title="Privacy-Preserving Threat Intelligence API")
detector = ThreatDetector()

class ThreatData(BaseModel):
    features: List[float]

@app.get("/")
def read_root():
    return {"message": "Welcome to the Privacy-Preserving Threat Intelligence Dashboard API"}

@app.post("/analyze")
def analyze_threat(data: ThreatData):
    # Analyze the incoming data using the ML engine
    prediction = detector.predict(data.features)
    return {"is_threat": bool(prediction == -1), "score": float(prediction)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
