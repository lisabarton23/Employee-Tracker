DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(30) NULL

);

CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30) NULL,
  salary DECIMAL (10,2),
  department_id INT 
--   //neds to reference department

);
CREATE TABLE employee (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT,
--   //neds to reference role id
manager_id INT 
-- //to hold reference to another employee that manages the employee being can be null


);
INSERT INTO department (id, name) VALUES (1, "Radiology"), (2, "Surgery"), (3, "NeoNatal");
-- VALUES ("vanilla", 2.50, 100);

INSERT INTO role (id, title, salary, department_id) VALUES (1, "DON", 30, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Sally", "Felix", 1, 25);
-- SELECT * FROM employee; 
-- SELECT * FROM department;
-- SELECT * FROM role;