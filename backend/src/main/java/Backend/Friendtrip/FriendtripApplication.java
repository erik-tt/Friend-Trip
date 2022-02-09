package Backend.Friendtrip;

//Databaserelaterte imports
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;


@SpringBootApplication
public class FriendtripApplication {

	public static void main(String[] args) {
		SpringApplication.run(FriendtripApplication.class, args);
	}

}

//Snakke med database via JDBC template, denne blir en egen public class etterhvert.. kun eksempel
@SpringBootApplication
class SQLCON implements CommandLineRunner {

	@Autowired
    private JdbcTemplate jdbcTemplate;
     
    //It finds two main classes and wont compile
    //public static void main(String[] args) {
       // SpringApplication.run(FriendtripApplication.class, args);
   // }
 
    @Override
    public void run(String... args) throws Exception {
        String sql = "INSERT INTO Users (Name) VALUES (?)"; //Gitt at du har laget en tabell allerede
        jdbcTemplate.execute("Insert into Users (Name) Values ('Eksempel')"); //en annen måte å utføre spørring
        int result = jdbcTemplate.update(sql, "Ole");
         
        if (result > 0) {
            System.out.println("A new row has been inserted.");
        }
         
    }

}

