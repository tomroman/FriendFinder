var express = require("express");
var mysql = require("mysql");
var path = require("path");
var app = express();


var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./app/public"));

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("server is listening on PORT: " + PORT);
});
