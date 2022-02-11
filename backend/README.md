# Backend

Written with java 17 and Spring. This project uses maven

## Build the project
Install java 17 and use the command `mvn install` in the backend directory to prepare the project. For now it skips the tests, but this will usually run them. To build the project `mvn compile` can be used.

## Run the projec

## Connecting to database with JPA Hibernate
In order for every user to communicate with MYSQL server provided by `XAMPP` they have to
edit `application.properties` to match their port which is 8080 for MacOS and 3306 for windows users. This should be changed in the datasource url in `application.properties`. Change username to root and password to empty, provided you have not created a user on terminal or localhost\phpmyadmin\. We use a interface called `UserRepository` which inheritits `CrudRepositories` methods. We use `Autowired`, provided by Spring, to use this repository without implementing it in our application. If we already have modelled a table for a class it is important that the fields which will correspond to the columns in the database table are completely indentical, it is case sensitive. This is if the database table is created beforehand, if not ignore this. We will need a repository for every entity. 