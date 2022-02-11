# Backend

Written with java 17 and Spring. This project uses maven

## Build the project
Install java 17 and use the command `mvn install` in the backend directory to prepare the project. This will install the necessary dependencies and compile the project. To compile/build the project `mvn compile` can be used.

## Run the project
Run the spring application with the command `mvn spring-boot:run`. This will start the spring server. The database need to be connected to be able to run the application.

## Test the project
To only run the tests use `mvn test`.

## Connecting to database with JPA Hibernate
In order for every developer to communicate with MYSQL server provided by `XAMPP` they have to
edit `application.properties` to match their listening port. This should be changed in the datasource url in `application.properties`. Change username to root and password to empty, provided you have not created a user on terminal or localhost\phpmyadmin\. We use a interface called `UserRepository` which inheritits `CrudRepositories` methods. We use `Autowired`, provided by Spring, to use this repository without implementing it in our application. If we already have modelled a table for a class it is important that the fields which will correspond to the columns in the database table are completely indentical, it is case sensitive. This is if the database table is created beforehand, if not, ignore this. We will need a repository for every entity. 
