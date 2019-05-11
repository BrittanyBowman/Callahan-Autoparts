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

CREATE TABLE Orders (
    id int NOT NULL,
    OrderNumber int NOT NULL,
    userID int,
    PRIMARY KEY (id),
    FOREIGN KEY (userID) REFERENCES users(id)
)