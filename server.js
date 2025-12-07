const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Ecommerce App is Running - DevOps CI/CD Success!");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

