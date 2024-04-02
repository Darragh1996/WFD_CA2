var express = require("express");
var bodyParser = require("body-parser");

var model = require('./model/db.js');  //

var cors = require('cors')
var app = express();


// serves files in public folder
app.use(express.static('public'));
app.use(cors());

//
// routes
//

// /teams

// /players

  
var myServer = app.listen(3000, function() {
  console.log("Server listening on port 3000");
});
