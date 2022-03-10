var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "smostafa",
  password: "serbz2by39lillia!@",
  database: "smostafa"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE new (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), password VARCHAR(255), bankname VARCHAR(255), ccnum VARCHAR(255), cardType VARCHAR(255))";
  con.query(sql, function(err, result){
    if (err) throw err;
    console.log("Table Created");
  });
});
