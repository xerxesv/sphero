CREATE DATABASE IF NOT EXISTS heroku_a35b008f64f7309;

USE heroku_a35b008f64f7309;

CREATE TABLE IF NOT EXISTS `Players` (
  `Player_ID` INT NOT NULL AUTO_INCREMENT,
  `Player_Username` varchar(25) NOT NULL,
  `Hash` varchar(100) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Ranking` INT NOT NULL,
  `Games_Played` INT NOT NULL,
  PRIMARY KEY (`Player_ID`)
);

CREATE TABLE IF NOT EXISTS `Friends` (
  `Player_ID` INT NOT NULL,
  `Friend_ID` INT NOT NULL,
  `Friend_Name` varchar(25) NOT NULL
);

ALTER TABLE `Friends` ADD CONSTRAINT `Friends_fk0` FOREIGN KEY (`Player_ID`) REFERENCES `Players`(`Player_ID`);

ALTER TABLE `Friends` ADD CONSTRAINT `Friends_fk1` FOREIGN KEY (`Friend_ID`) REFERENCES `Players`(`Player_ID`);