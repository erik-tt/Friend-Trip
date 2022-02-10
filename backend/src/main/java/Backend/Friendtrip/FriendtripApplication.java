package backend.friendtrip;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;


@SpringBootApplication
public class FriendtripApplication implements CommandLineRunner {

	@Autowired
    private JdbcTemplate jdbcTemplate;
     
    //It finds two main classes and wont compile
   public static void main(String[] args) {
        SpringApplication.run(FriendtripApplication.class, args);
    }
 
    @Override
    public void run(String... args) throws Exception {
        jdbcTemplate.execute("create table users (PK)");
        jdbcTemplate.execute("insert into users values (1)");
    }

}