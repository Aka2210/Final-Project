DROP DATABASE IF EXISTS playerAccounts;

CREATE DATABASE playerAccounts;

Use playerAccounts;

CREATE TABLE `Accounts`
(
   Account varchar(50) NOT NULL PRIMARY KEY,
   Password varchar(200)
);

CREATE TABLE `Records`
(
   Player varchar(50) NOT NULL PRIMARY KEY,
   Level int,
   FOREIGN KEY (`Player`) REFERENCES `Accounts`(`Account`) ON DELETE CASCADE
);

INSERT INTO `Accounts` (`Account`, `Password`) VALUES ('Admin@gmail.com', '$2y$10$ngyuVNh6usxt2CmBeyOwq.WYz/t4z90SWnuWCpm1DQbjJwkPTuL9.');
-- 密碼為NCKUCCEP