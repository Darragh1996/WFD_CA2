var express = require("express");
var bodyParser = require("body-parser");

var model = require("./model/db.js"); //

var cors = require("cors");
var app = express();

// serves files in public folder
app.use(express.static("public"));
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

var myServer = app.listen(3000, function () {
  console.log("Server listening on port 3000");
});

module.exports = app;
