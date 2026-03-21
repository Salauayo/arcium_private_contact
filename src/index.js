const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Import routes
const contactRoutes = require("./routes/contacts");

// Use routes
app.use("/api", contactRoutes);

// Start server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
