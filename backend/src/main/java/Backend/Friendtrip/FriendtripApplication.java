package backend.friendtrip;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import backend.friendtrip.core.User;
import backend.friendtrip.core.UserRepository;


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
        String username = "something"; //henta fra frontend

    
        
        
        System.out.println(UserRepo.existsByuserName("askelandsdsda"));
        System.out.println(UserRepo.findByuserName("askeland").getUserName());
        
        
    }

}