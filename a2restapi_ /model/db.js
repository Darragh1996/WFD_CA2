var mysql = require("mysql");

///////////////////////////////////////////////////////////////////////////////////////////

// Setup MySQL connection
// timezone is very NB

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gaanfl2024",
  timezone: "utc+0",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log(`Sucessfully connected to MySQL database gaaNFL2024`);
});

///////////////////////////////////////////////////////////////////////////////////////////

// GET /teams
exports.getTeams = function (req, res) {
  connection.query(`SELECT * FROM teams`, function (err, rows, fields) {
    if (err) throw err;

    res.status(200);
    res.json(rows);
  });
};

// GET /teams/:id
exports.getTeamById = function (req, res) {
  const teamId = req.params.id;
  connection.query(
    `SELECT * FROM teams WHERE id = ?`,
    [teamId],
    function (err, rows, fields) {
      if (err) throw err;

      res.status(200);
      res.json(rows[0]);
    }
  );
};

// GET /players
exports.getPlayers = function (req, res) {
  connection.query(
    `SELECT players.*,
    teams.name AS teamName
    FROM players
    INNER JOIN teams ON players.teamID = teams.id`,
    function (err, rows, fields) {
      if (err) throw err;

      res.status(200);
      res.json(rows);
    }
  );
};

// GET /players/:id
exports.getPlayersByTeamId = function (req, res) {
  const teamId = req.params.teamId;
  connection.query(
    `SELECT * FROM players WHERE teamID = ?`,
    [teamId],
    function (err, rows, fields) {
      if (err) throw err;

      res.status(200);
      res.json(rows);
    }
  );
};

// GET /results
exports.getResults = function (req, res) {
  connection.query(`SELECT * FROM results`, function (err, rows, fields) {
    if (err) throw err;

    res.status(200);
    res.json(rows);
  });
};

// GET /results/:div
exports.getResultsByDivision = function (req, res) {
  const div = req.params.div;
  connection.query(
    `SELECT * FROM results WHERE division = ?`,
    [div],
    function (err, rows, fields) {
      if (err) throw err;

      res.status(200);
      res.json(rows);
    }
  );
};

// PUT /results/:resultID
exports.updateResults = function (req, res) {
  const { resultID } = req.params;
  const { score1, score2 } = req.body;
  connection.query(
    `UPDATE results SET team1Score = ?, team2Score = ? WHERE id = ?`,
    [score1, score2, resultID],
    function (err, rows, fields) {
      if (err) throw err;

      res.status(200);
      res.json(rows);
    }
  );
};

// POST /login
exports.login = function (req, res) {
  const { email, password } = req.body;
  connection.query(
    `SELECT * FROM users WHERE email = ?`,
    [email],
    function (err, rows, fields) {
      if (err) {
        console.error(err);
        res.status(500).send({ message: "An error occurred" });
      } else if (rows.length === 0) {
        res.status(404).send({ message: "User not found" });
      } else if (rows[0].password == password) {
        res.status(200).send({ message: "Login successful" });
      } else {
        res.status(400).send("Invalid credentials");
      }
    }
  );
};
