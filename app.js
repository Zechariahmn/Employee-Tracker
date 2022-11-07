const mysql = require ("mysql");
const inquirer = requirer ("inquirer");
require ("console.table")

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
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
            "Add Role",
            "End"
        ]

    })

    .then(function ({task}) {
        switch (task) {
            case "View Employees": viewEmployee();
            break;
            case "View Employees by Department": ViewEmployeeByDepartment();
            break;
            case "Add Employee": AddEmployee();
            break;
            case "Remove Employee": RemoveEmployee();
            break;
            case "Add Role": AddRole();
            break;
            case "End": connection.end();
            break;
        }
    });

  function viewDepartments() {
    db.query('SELECT * from department', function (err, results){
        console.log(results);
    })

    function viewRoles(){
        db.query('SELECT * from role', function (err, results){
            console.log(results);
        })
        
        function viewEmployee(){
            db.query('SELECT * from employee', function (err, results){
                console.log(results);
            })

            function addDepartment(){
                inquirer.prompt ({
                    name: "title",
                    type: "input",
                    message: "What is the new role?"
                })
                .then(function(response){
                    db.query('INSERT INTO departments (name) VALUES(?)', function(err, results){
                        console.log(results);
                    })
                })

                function AddRole(title, salary, department_id){
                    inquirer.prompt({
                        name: "title",
                        type: "input",
                        message: "What is the new role being added?"
                    },
                    {
                        name: "salary",
                        type: "input",
                        message: "What is the salary of the new added role?"
                    },
                    {
                        name: "departmentid",
                        type: "input",
                        message: "What is the department of the new added role?"
                    })
                    .then(function(response){
                        db.query('INSERT INTO departments (name) VALUES(?)', function(err, results){
                            console.log(results);
                        })
                    })
                }
                
            }
        }
    }
  }
}
