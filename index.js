const mysql = require ("mysql");
const inquirer = require ("inquirer");
const express = require("express");
const { response } = require("express");
require ("console.table")

let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Grandzaria123$",
    database: "employeedb"
});

connection.connect(function(err){
    if (err) throw err;
    firstPrompt();
});

const firstPrompt = () => {
    inquirer.prompt({
        type: "list",
        name: "task",
        message: "which would you like to view?",

        choices: [
            "View Employee",
            "View Department",
            "Add Employee",
            "Remove Employees",
            "Add Role",
            "End"
        ]

    })

    .then(function (response) {
        switch (response.task) 
        {
            case "View all Employees": 
            viewEmployees();
            break;

            case "View all departments": 
            viewDepartments();
            break;

            case "View all roles": 
            viewRoles();
            break;

            case "Add an Employee": 
            addEmployee();
            break;

            case "Add a department": 
            addDepartment();
            break;

            case "Remove Employee": 
            removeEmployee();
            break;

            case "Add a Role": 
            addRole();
            break;

            case "End": 
            connection.end();
            break;
        }
    });

  function viewDepartments() {
    db.query('SELECT id, name from department', function (err, results){
        console.log(results);
    })

    function viewRoles(){
        db.query('SELECT title, salary, department_id from role JOIN department ON role_id = department_id', function (err, results){
            console.log(results);
        })
        
        function viewEmployee(){
            db.query('SELECT employee.id, employee.first_name, employee.last_name, role.salary, role.title, employee.manager_id, department.name, employee.role_id FROM employee JOIN role ON role_id = role.id JOIN department ON department_id = department_id', function (err, results){
                console.log(results);
            })

            function addDepartment(){
                inquirer.prompt ({
                    name: "title",
                    type: "input",
                    message: "What is the new role?"
                })
                .then(function (answer){
                    connection.query("INSERT INTO department (name) VALUES (?)", response.addDepartment, (error, results)=>{
                    
                        console.log("\n")
                
                    console.table(results)  
                    }
                    )
                    firstPrompt()
                  })
                }

                function addRole(){
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
                    .then(function(answer, results){
                        connection.query("INSERT INTO role SET ?", {title: answer.addTitle, department_id: answer.addDid, salary: answer.addSalary},
                        console.table(results)
                        )
                        firstPrompt()
                      })
                    }

                    function addEmployee(){
                        inquirer.prompt({
                        name: "first name",
                        type: "input",
                        message: "What is the first name of the new employee?"
                        },
                        {
                        name: "last name",
                        type: "input",
                        message: "What is the last name of the newly added employee?"
                        },
                        {
                        name: "roleid",
                        type: "input",
                        message: "What is the role of the newly added employee?"
                        },
                        {
                        name: "managerid",
                        type: "input",
                        message: "Who is the manager of the newly added employee?"
                        })
                        .then(function (answer, results){
                            connection.query("INSERT INTO employee SET ?",{first_name: answer.addFname, last_name: answer.addLname, role_id: answer.addroleid, manager_id: answer.addmanagerid},
                            console.table(results)
                            )
                            firstPrompt()
                          })
                        }
                    }
                }
                
            }
        }
    
  

