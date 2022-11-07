const mysql = require ("mysql");
const inquirer = requirer ("inquirer");
require ("console.table")

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306;
    user; "root",
    password: "Grandzaria123",
    database: "employeeDB"
});

connection.connect(function(err){
    if (err) throw err;
    firstPrompt();
});