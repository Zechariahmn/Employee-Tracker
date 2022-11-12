SELECT id, name from department

SELECT title, salary, department_id 
from role 
JOIN department 
ON role_id = department_id

SELECT employee.id, employee.first_name, employee.last_name, role.salary, role.title, employee.manager_id, department.name, employee.role_id 
FROM employee 
JOIN role 
ON role_id = role.id JOIN department 
ON department_id = department_id

INSERT INTO department (name) 
VALUES (?)

INSERT INTO role 
SET (?)

INSERT INTO employee 
SET (?)
