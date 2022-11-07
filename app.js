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

function firstPrompt() {

    inquirer.prompt({
        type: "list",
        name: "task",
        message: "which would you like to view?",

        choices: [
            "View Employees",
            "View Employees by Department",
            "Add Employee",
            "Remove Employees",
            "Update Employee Role",
            "Add Role",
            "End"
        ]

    })
}