const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

// Serve index.html directly
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
  const data = req.body;
  console.log("Attendance Received:", data);
  res.send("Attendance submitted successfully!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

