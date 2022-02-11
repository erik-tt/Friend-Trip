package Backend.Friendtrip.core;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    
    
    private @Id String username;
    private String password;

    protected User(){};
    //Bio for future extension.

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }
    public String getUserName() {
        return this.username;
    }
}
