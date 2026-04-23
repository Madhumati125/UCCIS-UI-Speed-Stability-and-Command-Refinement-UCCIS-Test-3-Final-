const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const FILE = "./alerts.json";

// GET all alerts
app.get("/api/alerts", (req, res) => {
    const data = JSON.parse(fs.readFileSync(FILE));
    res.json(data);
});

// POST new alert
app.post("/api/alerts", (req, res) => {
    const data = JSON.parse(fs.readFileSync(FILE));
    data.push(req.body);

    fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
    res.json({ message: "Alert added successfully" });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});