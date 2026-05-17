# Privacy-Preserving Threat Intelligence Dashboard

## Overview
This project is a professional-grade implementation of a **Privacy-Preserving Threat Intelligence Dashboard**. It combines cybersecurity, machine learning, and modern web development to detect network anomalies while ensuring data privacy using Differential Privacy.

### Key Features
- **ML-Powered Detection:** Uses Isolation Forests to identify anomalies in network metadata.
- **Privacy-Preserving:** Implements Differential Privacy (Laplace Noise) to sanitize sensitive data before analysis.
- **Modern Dashboard:** A React-based frontend for real-time visualization of threats and system status.
- **FastAPI Backend:** A high-performance Python API to serve the ML engine.

## Project Structure
```
project-upload/
├── backend/                # FastAPI Application
│   ├── ml_engine/          # Machine Learning logic
│   ├── main.py             # API Entry point
│   └── requirements.txt    # Python dependencies
├── frontend/               # React Application (TypeScript)
│   ├── src/                # UI components
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
├── REPORTS/                # Analysis and Strategic Reports
└── README.md               # Documentation
```

## Getting Started

### Backend Setup
1. Navigate to `backend/`
2. Create a virtual environment: `python -m venv venv`
3. Install dependencies: `pip install -r requirements.txt`
4. Run the API: `uvicorn main:app --reload`

### Frontend Setup
1. Navigate to `frontend/`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Technical Details
- **ML Engine:** Scikit-learn Isolation Forest
- **Privacy:** Differential Privacy via Laplace Mechanism
- **Backend:** FastAPI, Pydantic, Uvicorn
- **Frontend:** React, TypeScript, Tailwind CSS, Lucide Icons

## License
MIT
