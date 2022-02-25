package backend.friendtrip.core;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;

import java.util.Objects;
import java.util.regex.*;

@Entity
/* @Table(name = "user") */
public class User {
    
    
    private @Id @GeneratedValue Long id;
    private String userName;
    private String password;

    //Bio for future extension.
    /**
     * Constructer of the user class
     * @param userName user name as a string
     * @param password the password of a string
     */
    public User(String userName, String password) {
        setUserName(userName);
        setPassword(password);
    }
    protected User(){} //neccessary for autowired to work

    @Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		User user = (User) o;
		return Objects.equals(id, user.id) &&
			Objects.equals(userName, user.userName) &&
			Objects.equals(password, user.password);
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, userName, password);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
    
    
    /**
     * Sets the user name of a user.
     * @param userName the user name of a user
     * @throws IllegalArgumentException
     */
    public void setUserName(String userName) throws IllegalArgumentException {
        
        //Add functionality for distinct users
        if (userName.matches("^[a-zA-Z0-9ÆØÅæøå_-]*$") && (userName != null) 
        && (!userName.equals("")) && (userName.length() < 30))  {

            this.userName = userName;
        }
        else {
            throw new IllegalArgumentException(
                "The user name must consist of letters or numbers and cannot be longer than 30 characters");
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
     * gets username
     * @return userName
     */
    public String getUserName() {
        return userName;
    }

    /**
     * gets password
     * @return password
     */
    public String getPassword() {
        return password;
    }

    @Override
	public String toString() {
		return "User{" +
			"id=" + id +
			", firstName='" + userName + '\'' +
			", lastName='" + password + '\'' +
			'}';
	}
}
