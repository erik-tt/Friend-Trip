package backend.friendtrip.core;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class CommercialUser extends User{

    private @Id @GeneratedValue Long id;
    private String companyName;
    
    public CommercialUser(String username, String password, String role, String companyName) {
        super(username, password, role);
        validateCompanyName(companyName);
    }

    public CommercialUser() {
        super();
    }

    private void validateCompanyName(String companyName) {
        if (companyName != null) {
            this.companyName = companyName;
        }
    }
}
