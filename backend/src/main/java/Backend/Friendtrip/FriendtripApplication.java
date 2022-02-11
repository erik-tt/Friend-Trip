package Backend.Friendtrip;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;


import Backend.Friendtrip.core.Trip;
import Backend.Friendtrip.core.User;
import Backend.Friendtrip.core.UserRepository;


@SpringBootApplication
public class FriendtripApplication implements CommandLineRunner {

	@Autowired
    UserRepository UserRepo;
    

     
    //It finds two main classes and wont compile
   public static void main(String[] args) {
        SpringApplication.run(FriendtripApplication.class, args);
    }
 
    @Override
    public void run(String... args) throws Exception {

        for (int i = 0; i < 10; i++) {
            UserRepo.save( new User("Ole", "Passord"));
           
        }
        

        Iterable<User> iterator = UserRepo.findAll();
         
        System.out.println("All users: ");
        iterator.forEach(item -> System.out.println(item.getUserName()));
        
    }

}