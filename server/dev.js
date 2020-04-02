import express from "express";
const apiRoutes = require("./routes");

const app = express();

app.get("/events/", apiRoutes.events);
app.get("/events/:id", apiRoutes.event);

app.get("*", (req, res) => {
  res.json({ endpoint: `${req.url} - Not found` });
});

app.listen(7777, () => console.log("Server running at http://localhost:7777"));

module.exports = app;
