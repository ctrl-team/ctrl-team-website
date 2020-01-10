let express = require("express"),
  app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.redirect("/eng");
});

app.get("/eng", (req, res) => {
  res.sendFile(__dirname + "/views/eng.html");
});

app.get("/pl", (req, res) => {
  res.sendFile(__dirname + "/views/pl.html");
});

app.get("/portfolio", (req, res) => {
  res.sendFile(__dirname + "/views/portfolio.html");
});

app.get("/team", (req, res) => {
  res.sendFile(__dirname + "/views/team.html");
});

app.listen(80, () => {
  console.log("server ready");
});
