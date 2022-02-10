package backend.friendtrip.core;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import java.util.regex.*;

@Entity
public class User {
    
    private @Id @GeneratedValue Long id;
    private String userName;
    private String password;

    //Bio for future extension.

    public User(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }
    
    public void setUserName(String userName) throws IllegalArgumentException {
        
        //Add functionality for distinct users
        if (userName.matches("^[a-zA-Z]*$") && (userName != null) 
        && (!userName.equals("")) && (userName.length() < 30)) {

            this.userName = userName;
        }
        else {
            throw new IllegalArgumentException("User name  is not valid");
        }
       
        
    }
    
    public void setPassword(String password) {

        if (password.length() > 7) {
            int count = 0;
            for (int i = 0; i < password.length(); i++) {
                if (!Character.isLetter(password.charAt(i)) && !Character.isDigit(password.charAt(i))) {
                    count++;
                }
            }
            if (count == 0) {
                throw new IllegalArgumentException(
                    "The password does not contain a special character or is under 8 letters");
            }
            this.password = password;
        }

    }
}
