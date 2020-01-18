DROP DATABASE IF EXISTS genre_database;
CREATE DATABASE genre_database;

USE genre_database;

CREATE TABLE genre(
  id INTEGER AUTO_INCREMENT NOT NULL,
  name VARCHAR(25),
  description VARCHAR(255),
  comment VARCHAR(255),
  PRIMARY KEY (id)
);

