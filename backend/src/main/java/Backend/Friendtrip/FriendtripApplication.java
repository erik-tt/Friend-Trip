package Backend.Friendtrip;

//Databaserelaterte imports
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;
//
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FriendtripApplication {

	public static void main(String[] args) {
		SpringApplication.run(FriendtripApplication.class, args);
	}

}

//Snakke med database via JDBC template
@SpringBootApplication
class SQLCON implements CommandLineRunner {

	@Autowired
    private JdbcTemplate jdbcTemplate;
     
    public static void main(String[] args) {
        SpringApplication.run(FriendtripApplication.class, args);
    }
 
    @Override
    public void run(String... args) throws Exception {
        String sql = "INSERT INTO Users (Name) VALUES (?)"; //Gitt at du har laget en tabell allerede
         
        int result = jdbcTemplate.update(sql, "Ole");
         
        if (result > 0) {
            System.out.println("A new row has been inserted.");
        }
         
    }

}

