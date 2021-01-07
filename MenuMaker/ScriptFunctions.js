/* connect to the cookbook data base */

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  /* Insert / Create a new receipe   */
  var sql = "INSERT INTO `Recipe` (`id`, `name`, `description`, `instructions`) VALUES (NULL, 'Le nom de la recette', 'sa description courte', 'les instructions');";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

/* Insert / Create a new ingredient  */
var sql = "INSERT INTO `Ingredient` (`id`, `name`) VALUES (NULL, 'Nom de l'ingredient');";

con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
});
});

/* Link ingredients to a receipe  */
var receipeName = " input"
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT id, name FROM Recipe", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

var sql = "INSERT INTO `RecipeIngredient` (`recipe_id`, `ingredient_id`, `measure_id`, `amount`) VALUES ('4', '10', '2', '5'), ('4', '8', '2', '350');";

con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
});
});

/* Display the receipe table */
con.connect(function(err) {
  if (err) throw err;

  con.query("SELECT * FROM Receipe", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

/* Display the receipe table */
