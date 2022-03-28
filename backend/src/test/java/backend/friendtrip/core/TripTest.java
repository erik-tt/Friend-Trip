package backend.friendtrip.core;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class TripTest {

    //properties for genTrip:

    String title = "Tur til Galdhøpiggen :)";
    String description = "Vi tenkte å ta en tur til Galdhøpiggen. Bli med!";
    int difficulty = 3;

    //properties for genUser:
    String username = "Andrea123";
    String password = "NTNu54321!";
    String role = "USER";
    String bio ="";

    //generates user for test purposes
    private User genUser() {
        User user = new User(username, password, role, bio);
        return user;
    } 

    //generates trip for test purposes
    private Trip genTrip() {
        Trip trip = new Trip(title, description, genUser(), difficulty);
        return trip;
    }

    //tests constructor
    @Test
    public void testConstructor() {
        Assertions.assertEquals(title, genTrip().getTitle());
        Assertions.assertEquals(description, genTrip().getDescription());
        Assertions.assertEquals(username, genTrip().getOwner().getUsername());
        Assertions.assertEquals(difficulty, genTrip().getDifficulty());
    }

    @Test
    public void testIllegalTitle(){
        
        //tests null title
        String title1 = null;
        Assertions.assertThrows(NullPointerException.class, () -> genTrip().setTitle(title1));
        
        //tests empty string
        String title2 = "";
        Assertions.assertThrows(IllegalArgumentException.class, () -> genTrip().setTitle(title2));

        //tests title longer than 30 characters
        String title3 = "thisisatitlewithalengthlongerthan30charactersithinkhahahhahahhahahahhahahahahahahhaha";
        Assertions.assertThrows(IllegalArgumentException.class, () -> genTrip().setTitle(title3));

    }

    @Test
    public void testDescription(){
        //tests null descrption
        String description1 = null;
        Assertions.assertThrows(NullPointerException.class, () -> genTrip().setDescription(description1));

        //tests empty descpription
        String description2 = "";
        Assertions.assertThrows(IllegalArgumentException.class, () -> genTrip().setDescription(description2));
    }

    @Test
    public void testDifficulty(){
        //tests difficulty larger than the value 3
        int difficulty1 = 1000;
        Assertions.assertThrows(IllegalArgumentException.class, () -> genTrip().setDifficulty(difficulty1));

        //tests difficulty less than the value 1
        int difficulty2 = -1000;
        Assertions.assertThrows(IllegalArgumentException.class, () -> genTrip().setDifficulty(difficulty2));
    }
}