let allData = [];
let currentType = "";
let chart;

// Load alerts
function loadAlerts(type) {
    currentType = type;

    fetch("http://localhost:5000/api/alerts")
        .then(res => res.json())
        .then(data => {
            allData = data.filter(a => a.type === type);
            render(allData);
            updateChart(allData); // 👈 category-based chart
        })
        .catch(() => {
            document.getElementById("data").innerHTML = "Error loading data";
        });
}

// Render data
function render(data) {
    const container = document.getElementById("data");
    container.innerHTML = "";

    if (data.length === 0) {
        container.innerHTML = "<p>No data found</p>";
        return;
    }

    data.forEach(item => {
        const cls = item.status.toLowerCase();

        container.innerHTML += `
            <div class="card ${cls}">
                <h3>${item.title}</h3>
                <p>Status: ${item.status}</p>
                <p>Zone: ${item.zone}</p>
            </div>
        `;
    });
}

// Search
function filterData() {
    const search = document.getElementById("search").value.toLowerCase();

    const filtered = allData.filter(a =>
        a.title.toLowerCase().includes(search)
    );

    render(filtered);
    updateChart(filtered); // 👈 update chart with filtered data
}

//
// 📊 CATEGORY-BASED CHART
//
function createChart() {
    const ctx = document.getElementById("chart").getContext("2d");

    chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["High", "Medium", "Low", "Critical"],
            datasets: [{
                label: "Status Distribution",
                data: [0, 0, 0, 0]
            }]
        }
    });
}

// Update chart per category
function updateChart(data) {
    const high = data.filter(a => a.status === "High").length;
    const medium = data.filter(a => a.status === "Medium").length;
    const low = data.filter(a => a.status === "Low").length;
    const critical = data.filter(a => a.status === "Critical").length;

    chart.data.datasets[0].data = [high, medium, low, critical];
    chart.update();
}

// Init chart
window.onload = createChart;