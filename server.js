let express = require("express"),
  app = express();
var port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/eng.html")
});

app.get("/portfolio", (req, res) => {
  res.sendFile(__dirname + "/views/portfolio.html");
});

app.get("/team", (req, res) => {
  res.sendFile(__dirname + "/views/team.html");
});

app.listen(port, () => {
  console.log("server ready");
});
