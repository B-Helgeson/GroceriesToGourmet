-- SQL File for DataBase Schema
DROP DATABASE IF EXISTS groceries_db;
CREATE DATABASE groceries_db;
USE groceries_db;

-- CREATE TABLE saved_recipes (
--     id int NOT NULL AUTO_INCREMENT,
--     real_name varchar(30) NOT NULL,
--     user_name varchar(30) NOT NULL,
--     user_id int NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE users (
--     id int NOT NULL AUTO_INCREMENT,
--     real_name varchar(30) NOT NULL,
--     user_name varchar(30) NOT NULL,
--     user_id int NOT NULL,           
--     password varchar(30) NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE shopping_list (
--     id int NOT NULL AUTO_INCREMENT,
--     user_id int NOT NULL,
--     list_id int NOT NULL,
--     ingredient_name varchar(30) NOT NULL,
--     amount int NOT NULL,
--     units int NOT NULL,
--     purchased varchar(30) NOT NULL
-- );

-- -- Seeds folder needed? -- 
-- -- Server logic needed? -- 