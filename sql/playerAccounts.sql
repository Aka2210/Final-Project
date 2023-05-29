DROP DATABASE IF EXISTS playerAccounts;

CREATE DATABASE playerAccounts;

Use playerAccounts;

CREATE TABLE `Accounts`
(
   Account varchar(20) NOT NULL PRIMARY KEY,
   Password varchar(60)
);

CREATE TABLE `Records`
(
   Player varchar(20) NOT NULL PRIMARY KEY,
   Level int,
   FOREIGN KEY (`Player`) REFERENCES `Accounts`(`Account`) ON DELETE CASCADE
);