package Backend.Friendtrip.core;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Trip {
    
    private @Id @GeneratedValue Long id;
    private String name;

    protected Trip(){};
    //Bio for future extension.
    
    public Trip(String name) {
        this.name = name;
    }
    public String getUserName() {
        return this.name;
    }
}