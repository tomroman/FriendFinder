var mysql = require("mysql");
var express = require("express");


var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "",
    database: "FriendFinder_db"
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
    
});




function loadFriends(cb) {
 
    connection.query("SELECT * FROM Friends", function(err, res) {
      if (err) throw err;
     
      var data = JSON.stringify(res);
      data = JSON.parse(data);
   
      friends = data;
      cb(friends)
    });
  }
  
  
  function addFriends(arr, cb){
    connection.query("INSERT INTO Friends (name, photo, scores) VALUES (?, ?, ?)", arr, function(err, res){
      if (err) throw err;
  
      cb(res)
    });
  }

  
  
  module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
      loadFriends(function(data){
        return res.json(data)
        
      });
    });
  
  
    app.post("/api/friends", function(req, res){
     var newProfile = []
     var newScores = req.body.scores
     var profiles ={}
      loadFriends(function(data){
        profiles = data
  

      
      })
  
  
    })
  }