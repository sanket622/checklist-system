const express = require("express");
const path = require("path");
const { fetchApplicationData, evaluateChecklist } = require("./services/checklistService");

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "../public")));

app.get("/checklist", async (req, res) => {
  try {
    const data = await fetchApplicationData();
    const results = evaluateChecklist(data);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch checklist results." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
