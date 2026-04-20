# UCCIS-UI-Speed-Stability-and-Command-Refinement-UCCIS-Test-3-Final UCCIS Dashboard
## Project Description

This project is a simple dashboard system for monitoring civic issues like waste management, water problems, and emergencies. The main goal was to create a clean and stable interface where users can view alerts and understand their status easily.

Instead of adding too many complex features, I focused on making the system work properly without errors and keeping the UI clear and user-friendly.

---

## Features

* Filter alerts by category (Waste, Water, Emergency)
* Display alerts in card format
* Show status (High, Medium, Low, Critical)
* Search alerts by title
* Dynamic chart based on selected category
* Auto refresh to simulate real-time updates

---

## Technologies Used

Frontend:

* HTML
* CSS
* JavaScript

Backend:

* Node.js
* Express.js

Other:

* Chart.js for visualization
* JSON file for storing data

---

## How It Works

1. The frontend sends a request to the backend API.
2. The backend reads data from the alerts.json file.
3. Data is sent back to the frontend.
4. The UI displays the alerts as cards.
5. The chart updates based on selected category and filtered data.

---

## Project Structure

```id="b0e9n4"
UCCIS/
│
├── backend/
│   ├── server.js
│   └── alerts.json
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
```

---

## How to Run

1. Start backend:

```bash id="1kq7h2"
cd backend
node server.js
```

2. Open frontend:

* Run index.html using Live Server

---

## Challenges Faced

* Initially, the chart was not displaying because data was not loading properly from the backend.
* Fixed API connection issues (localhost and port handling)
* Adjusted UI layout so cards don’t hide the chart

---

## Improvements Made

* Changed layout from flex to grid for better spacing
* Reduced card size to improve visibility
* Added status-based colors for better clarity
* Optimized UI to avoid scrolling issues

---

## Conclusion

This project helped me understand how frontend and backend communicate using APIs. I also learned how to manage UI layout properly and handle errors.

The main focus was to build a system that is simple, stable, and easy to use.

---
