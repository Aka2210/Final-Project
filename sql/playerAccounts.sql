DROP DATABASE IF EXISTS playerAccounts;

CREATE DATABASE playerAccounts;

Use playerAccounts;

CREATE TABLE `Accounts`
(
   Account varchar(50) NOT NULL PRIMARY KEY,
   Password varchar(50)
);

CREATE TABLE `Records`
(
   Player varchar(50) NOT NULL PRIMARY KEY,
   Level int,
   FOREIGN KEY (`Player`) REFERENCES `Accounts`(`Account`) ON DELETE CASCADE
);

INSERT INTO `Accounts` (`Account`, `Password`) VALUES ('Admin@gmail.com', 'NUKUCCEP');