const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>OOps!Not found.</h1>");
});

app.listen(5000, (req, res) => {
  console.log("Logging to 5000...");
});
