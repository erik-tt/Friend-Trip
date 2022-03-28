package backend.friendtrip.core;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class UserTest {

    private final String username = "Erik_Torvbråten1";
    private final String password = "Hund2022!";
    private final String bio = "";

    private User genUser(String role) {

        User user = new User(username, password, role, bio);

        return user;
    } 

    @Test
    public void testConstructor() {

        Assertions.assertEquals(username, genUser("USER").getUsername());
        Assertions.assertEquals(password, genUser("USER").getPassword());
    }

    @Test
    public void testIllegalUsername() {

        String illegalUsername = "Marcus Fuglestad";
        String illegalUsername2 = "";
        String illegalUsername3 = "Usernamethatislongerthanalotofcharacterswhoevenhasthisasausername";

        Assertions.assertThrows(IllegalArgumentException.class, () 
        -> genUser("USER").setUsername(illegalUsername));
        Assertions.assertThrows(IllegalArgumentException.class, () 
        -> genUser("USER").setUsername(illegalUsername2));
        Assertions.assertThrows(IllegalArgumentException.class, () 
        -> genUser("USER").setUsername(illegalUsername3));
    }

    @Test
    public void testIllegalPassword() {

        String shortPassword = "Katt";
        String withoutSpecial = "Detteburdeikkeværtgyldig";
        
        Assertions.assertThrows(IllegalArgumentException.class, () 
        -> genUser("USER").setPassword(shortPassword));
        Assertions.assertThrows(IllegalArgumentException.class, () 
        -> genUser("USER").setPassword(withoutSpecial));
    }

    @Test
    public void testRole() {
        Assertions.assertEquals(genUser("ADMIN").getRole(), "ADMIN");
        Assertions.assertEquals(genUser("COMMERCIAL").getRole(), "COMMERCIAL");
    }

}
