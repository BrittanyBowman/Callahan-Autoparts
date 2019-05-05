CREATE TABLE parts
(id SERIAL PRIMARY KEY,
name TEXT, 
number INT,
price INT, 
img TEXT, 
descrip TEXT)

CREATE TABLE users
(id SERIAL PRIMARY KEY,
username TEXT,
password TEXT)

-- must use foreign key and a join

CREATE TABLE orders (
    id serial PRIMARY KEY,
    user_id int REFERENCES users(id)
)
