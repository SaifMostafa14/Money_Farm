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
  var sql = "INSERT INTO new (id, username, email, password, bankname, ccnum) VALUES ?";
  var values = [
	  ['0001', 'Toni', 'ironman@gmail.com', '10000000', 'Bank of America', '4000 2843 5432 4724'],
	['0002', 'Bob', 'bobs@gmail.com', '20000000', 'Bank of America', '2434 6000 4654 8729'],
	['0003', 'Anne', 'catwoman@yahoo.com','30000000', 'Chase', '4000 4638 9876 3219']
  ];
  con.query(sql, [values],  function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
