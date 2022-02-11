package backend.friendtrip.core;

import java.beans.Transient;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;


public class UserTest {

    private final String userName = "Erik_Torvbråten1";
    private final String password = "Hund2022!";

    private User genUser() {

        User user = new User(userName, password);

        return user;
    } 

    @Test
    public void testConstructor() {

        Assertions.assertEquals(userName, genUser().getUserName());
        Assertions.assertEquals(password, genUser().getPassword());
    }

    @Test
    public void testIllegalUserName() {

        String illegalUserName = "Marcus Fuglestad";
        String illegalUserName2 = "";
        String illegalUserName3 = "Usernamethatislongerthanalotofcharacterswhoevenhasthisasausername";

        Assertions.assertThrows(IllegalArgumentException.class, () 
        -> genUser().setUserName(illegalUserName));
        Assertions.assertThrows(IllegalArgumentException.class, () 
        -> genUser().setUserName(illegalUserName2));
        Assertions.assertThrows(IllegalArgumentException.class, () 
        -> genUser().setUserName(illegalUserName3));
    }

    @Test
    public void testIllegalPassword() {

        String shortPassword = "Katt";
        String withoutSpecial = "Detteburdeikkeværtgyldig";
        
        Assertions.assertThrows(IllegalArgumentException.class, () 
        -> genUser().setPassword(shortPassword));
        Assertions.assertThrows(IllegalArgumentException.class, () 
        -> genUser().setPassword(withoutSpecial));
    }

}
