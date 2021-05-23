DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;

CREATE TABLE department (
  id INT PRIMARY KEY,
  name VARCHAR(30) NULL,

);

CREATE TABLE role (
  id INT PRIMARY KEY,
  title VARCHAR(30) NULL,
  salary DECIMAL (10,2),
  department_id INT 
--   //neds to reference department

);
CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT 
--   //neds to reference role id
manager_id INT 
-- //to hold reference to another employee that manages the employee being can be null


);
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100);
