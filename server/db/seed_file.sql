CREATE TABLE parts
(id SERIAL PRIMARY KEY,
name TEXT, 
number INT 
price INT, 
img TEXT, 
descrip TEXT)

CREATE TABLE users
(id SERIAL PRIMARY KEY,
username TEXT,
password TEXT)

-- must use foreign key and a join

CREATE TABLE orders (
    order_id INT,
    user_id TEXT
    PRIMARY KEY (order_id),
    FOREIGN KEY (user_id) REFERENCES id(users)
)
