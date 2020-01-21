DROP DATABASE IF EXISTS genre_database;
CREATE DATABASE genre_database;

USE genre_database;

CREATE TABLE genre(
  id INTEGER AUTO_INCREMENT NOT NULL,
  genre_name VARCHAR(25),
  description VARCHAR(1000),
  comment VARCHAR(10000),
  show_genre BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);