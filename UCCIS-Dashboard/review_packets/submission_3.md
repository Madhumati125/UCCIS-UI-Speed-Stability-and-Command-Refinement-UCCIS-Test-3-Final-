# REVIEW PACKET — SUBMISSION 3

## 1. ENTRY POINT

Frontend:

- index.html

Backend:

- server.js

## 2. CORE EXECUTION FLOW

File 1: script.js  
→ Handles UI logic and API calls

File 2: server.js  
→ Backend API routing and server setup

File 3: alerts.json / zones.json  
→ Data source for zones and alerts

## 3. LIVE FLOW

User Action:
→ User opens dashboard in browser

Flow:
Frontend → API → Backend → JSON → UI

### Real JSON Response:

{
"zone_id": "mumbai_zone_1",
"status": "RED"
}

## 4. WHAT WAS BUILT

- Zone visualization system
- Alert monitoring system
- Action handling system
- Dashboard UI layout

## 5. FAILURE CASES

- API not running → UI shows error
- Empty data → Blank UI state
- Invalid zone → Error message displayed

## 6. PROOF

- UI screenshots attached
- API response tested using browser/Postman
- Action flow verified manually
