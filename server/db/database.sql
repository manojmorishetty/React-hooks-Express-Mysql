CREATE DATABASE resource;
use resource;

CREATE TABLE `resource`.`location` (
  `locationid` INT AUTO_INCREMENT,
  `city` VARCHAR(45) NULL,
  `province` VARCHAR(45) NULL,
  `country` VARCHAR(45) NULL,
  PRIMARY KEY (`locationid`)) AUTO_INCREMENT=1001;
  
create table athlete (athleteid int AUTO_INCREMENT, name varchar(50), age varchar(10),locationid int,
FOREIGN KEY (locationid) REFERENCES location(locationid),
PRIMARY KEY (`athleteid`)) AUTO_INCREMENT=101;




insert into location (city,province,country)  values("Toronto", "Ontario", "Canada");
insert into location (city,province,country)  values("Halifax", "Nova Scotia", "Canada");
insert into athlete (name,age,locationid) values ("Manoj", "26", 1001);
insert into athlete (name,age,locationid) values ("Kumar", "25", 1001);
insert into athlete (name,age,locationid) values ("Rakesh", "24", 1002);
insert into athlete (name,age,locationid) values ("Suresh", "25", 1002);