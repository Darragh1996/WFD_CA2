var express = require("express");
var bodyParser = require("body-parser");

var model = require("./model/db.js"); //

var cors = require("cors");
var app = express();

// serves files in public folder
app.use(express.static("public"));
app.use(express.json());
app.use(cors());

//
// routes
//

// /teams
app.route("/teams").get(function (req, res) {
  model.getTeams(req, res);
});

// /teams:id
app.route("/teams/:id").get(function (req, res) {
  model.getTeamById(req, res);
});

// /players
app.route("/players").get(function (req, res) {
  model.getPlayers(req, res);
});

// /teams:id
app.route("/players/:teamId").get(function (req, res) {
  model.getPlayersByTeamId(req, res);
});

// /results
app.route("/results").get(function (req, res) {
  model.getResults(req, res);
});

app.route("/results/:resultId").delete(function (req, res) {
  model.deleteResultById(req, res);
});

app.route("/results/rounds").get(function (req, res) {
  model.getRounds(req, res);
});

// /results:div
app.route("/results/:div").get(function (req, res) {
  model.getResultsByDivision(req, res);
});

// /results/resultID
app.route("/results/:resultID").patch(function (req, res) {
  model.updateResults(req, res);
});

// /login
app.route("/login").post(function (req, res) {
  model.login(req, res);
});

var myServer = app.listen(3000, function () {
  console.log("Server listening on port 3000");
});

module.exports = app;
