drop database if exists addressbook;

create database addressbook CHARACTER SET UTF8;

CONNECT addressbook;
drop user if exists 'app-user'@'%';
create user 'app-user'@'%' identified by 'ju78iklo';
grant all privileges on addressbook.* TO 'app-user'@'%';
