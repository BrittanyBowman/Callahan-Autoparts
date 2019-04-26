CREATE TABLE parts
(id SERIAL PRIMARY KEY,
name TEXT, 
number INTEGER, 
price INTEGER, 
img TEXT, 
descrip TEXT)

CREATE TABLE users
(id SERIAL PRIMARY KEY,
username TEXT,
password TEXT)

-- must use foreign key and a join