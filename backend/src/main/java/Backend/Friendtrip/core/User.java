package backend.friendtrip.core;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
}
