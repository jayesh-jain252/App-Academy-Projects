-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS instruments;
DROP TABLE IF EXISTS musicians;
DROP TABLE IF EXISTS bands;

CREATE TABLE bands (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100)
);
CREATE TABLE musicians (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100),
  band_id INTEGER,
  FOREIGN KEY (band_id) REFERENCES bands(id)
);
CREATE TABLE instruments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  type VARCHAR(100) NOT NULL
);

CREATE TABLE musicians_instruments(musician_id INTEGER FOREIGN KEY,instrument_id INTEGER FOREIGN KEY);

INSERT INTO bands VALUES (1,'BLACKPINK');

INSERT INTO musicians VALUES (1,'Rose','Park',1);
INSERT INTO musicians VALUES (2,'Lisa','Manoban',1);
INSERT INTO musicians VALUES (3,'Jisoo','Kim',1);
INSERT INTO musicians VALUES (4,'Jennie','Kim',1);

INSERT INTO instruments VALUES (1,'Piano');
INSERT INTO instruments VALUES (2,'Guitar');
INSERT INTO instruments VALUES (3,'Drum');
