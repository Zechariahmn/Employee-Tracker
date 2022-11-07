CREATE DATABASE EmployeeDB
USE EmployeeDB;

CREATE TABLE department(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) NULL,
    salary DECIMAL(10,3) NULL,
    department_id INT NULL,
    PRIMARY KEY (id)
);