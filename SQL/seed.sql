USE  Employee_db

INSERT INTO department (name)
VALUES ('Sales');
INSERT INTO department (name)
VALUES ('Engineering');
INSERT INTO department (name)
VALUES ('Finance');
INSERT INTO department (name)
VALUES ('Legal');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales lead', 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ('Lead Engineer', 150000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ('Software Engineer', 120000, 2)
INSERT INTO role (title, salary, department_id)
VALUES ('Accountant', 125000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ('Legal Team Lead', 250000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Mikhail', 'Best', 1, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Mikayla', 'Godwin', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Alexa', 'Hawkins', 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Seth', 'Royce', 4, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Perscilla', 'Evans', 1, NULL)
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Nathan', 'Adams', 2, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Kyle', 'Bolt', 3, 2);


