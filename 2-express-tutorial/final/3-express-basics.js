const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("user hit the log");
  res.status(200).send("Home Pa");
});

app.get("/about", (req, res) => {
  console.log("user hit the log");
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>Hey! You look great today!</h1>");
});

app.listen(5000, () => {
  console.log(`Example app listening on port 5000`);
});
