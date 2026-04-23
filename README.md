# UCCIS Dashboard

## Project Description

This project is a dashboard system for monitoring civic issues such as waste management, water problems, and emergencies.

The focus of this system is:
- Stability
- Clear UI
- Proper frontend-backend communication
- Structured data flow

The system is designed to be simple, functional, and easy to review.

---

## Features

- Filter alerts by category (Waste, Water, Emergency)
- Display alerts in card format
- Show status (High, Medium, Low, Critical)
- Search alerts by title
- Dynamic chart based on selected category
- Auto refresh to simulate real-time updates

---

## Technologies Used

Frontend:
- HTML
- CSS
- JavaScript

Backend:
- Node.js
- Express.js

Other:
- Chart.js (data visualization)
- JSON (data storage)

---

## System Entry Points

Frontend:
- `index.html`

Backend:
- `server.js`

---

## How It Works

1. User opens the dashboard (index.html)
2. Frontend (script.js) sends API request
3. Backend (server.js) processes request
4. Data is read from alerts.json
5. JSON response is returned
6. UI updates with cards and chart

Flow:
Frontend → API → Backend → JSON → UI

---

## Project Structure
UCCIS/
│
├── backend/
│ ├── server.js
│ └── alerts.json
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ └── script.js
│
├── review_packets/
│ ├── submission_1.md
│ ├── submission_2.md
│ ├── submission_3.md
---

## How to Run

1. Start Backend


cd backend
node server.js


2. Run Frontend

- Open `index.html` using Live Server

---

## Challenges Faced

- API connection issues (port mismatch)
- Chart not rendering due to missing data
- UI overlap between cards and chart

---

## Improvements Made

- Grid layout for better structure
- Status-based color coding
- Reduced card size
- Improved UI clarity
- Fixed API data flow issues

---

## Submission Protocol (MANDATORY)

Every submission must include:

- `review_packets/` folder
- Latest review packet file (submission_3.md)
- Proper system documentation

If missing, submission will be rejected.

---

## Review Packet Location

All system documentation is available in:


/review_packets/


Files:
- submission_1.md → Initial version
- submission_2.md → Improved version
- submission_3.md → Final system (current)

---

## Conclusion

This project demonstrates:
- Frontend-backend integration
- API-based data flow
- UI clarity and stability
- Structured system documentation

The system is built to be reviewable, testable, and ready for handover.
