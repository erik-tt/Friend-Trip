package backend.friendtrip;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class FriendtripApplication{
   public static void main(String[] args) {
        SpringApplication.run(FriendtripApplication.class, args);
        FriendtripController controller = new FriendtripController();
        System.out.println(controller.getUsers()); 
    }
}