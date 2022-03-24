package backend.friendtrip.core;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;



import java.util.Objects;

@Entity
public class User {
    
    
   
    private @Id @GeneratedValue Long id;
    private String username;
    private String password;
    private String role;
    private String companyName;

    

    //Bio for future extension.
    /**
     * Constructer of the user class
     * @param username user name as a string
     * @param password the password of a string
     * @param role role as a string
     * @param companyName company name
     */
    public User(String username, String password, String role) {
        setUsername(username);
        setPassword(password);
        setRole(role);
    }
    
    protected User(){}

    @Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		User user = (User) o;
        return Objects.equals(id, user.id) &&
			Objects.equals(username, user.username) &&
            Objects.equals(password, user.password) &&
            Objects.equals(role, user.role) &&
            Objects.equals(companyName, user.companyName);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, username, password);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
    }
    
   /*  
    private void setEmail(String email) {
        this.email = email;
        if (email.matches("^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$")){
            this.email = email;
        } else {
            throw new IllegalArgumentException(
                "This email is not valid");
        }
    }
     */
    
    /**
     * Sets the user name of a user.
     * @param username the user name of a user
     * @throws IllegalArgumentException
     */
    public void setUsername(String username) throws IllegalArgumentException {
        
        //Add functionality for distinct users
        if (username.matches("^[a-zA-Z0-9ÆØÅæøå_-]*$") && (username != null) 
        && (!username.equals("")) && (username.length() < 30)) {

            this.username = username;
        }
        else {
            throw new IllegalArgumentException(
                "The username must consist of letters or numbers and cannot be longer than 30 characters");
        }
       
        
    }

    /**
     * Sets a new password
     * @param password The password as a string. 
     * @throws IllegalArgumentException 
     */
    public void setPassword(String password) throws IllegalArgumentException {

        if (password.length() > 7) {
            int count = 0;
            for (int i = 0; i < password.length(); i++) {
                if (!Character.isLetter(password.charAt(i)) && !Character.isDigit(password.charAt(i))) {
                    count++;
                }
            }
            if (count == 0) {
                throw new IllegalArgumentException(
                    "The password does not contain a special character.");
            }
            this.password = password;
        }
        else {
            throw new IllegalArgumentException(
                "Password cannot be shorter than 7 characters.");
        }
    }

    /**
     * Sets admin to true or false
     * @param role Admin paramater as boolean 
     * @throws IllegalArgumentException 
     */
    public void setRole(String role){
        this.role = role;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    /**
     * gets username
     * @return username
     */
    public String getUsername() {
        return username;
    }

    /**
     * gets password
     * @return password
     */
    public String getPassword() {
        return password;
    }

    /**
     * gets admin
     * @return admin
     */
    public String getRole() {
        return role;
    }

    public String getCompanyName() {
        return companyName;
    }

    @Override
	public String toString() {
		return "User{" +
            "id=" + id +
			", username='" + username + '\'' +
            ", password='" + password + '\'' +
            ", role=" + role + '\'' +
            ", companyName=" + companyName + '\'' +
			'}';
	}
}
