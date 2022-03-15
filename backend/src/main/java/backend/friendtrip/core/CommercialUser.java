package backend.friendtrip.core;

import javax.persistence.Entity;

@Entity
public class CommercialUser {

    private String companyName;
    
    public CommercialUser(String userName, String password, String companyName) {
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
