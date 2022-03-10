var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "smostafa",
  password: "serbz2by39lillia!@",
  database: "smostafa"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM new", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
