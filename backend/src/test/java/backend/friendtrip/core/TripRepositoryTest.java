package backend.friendtrip.core;


import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.annotation.Rollback;

@DataJpaTest
@AutoConfigureTestDatabase( replace = Replace.NONE) //to test the actual database and not the in memory one
@Rollback(false)
public class TripRepositoryTest {

    @Autowired
    private TripRepository tripRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    public void testCreateUser() {
        User testUser = new User("test-user1", "password!12", "USER", "");
        Trip testTrip = new Trip("test-trip", "test-description", testUser, 3);
        
        userRepository.save(testUser);

        Trip savedTrip = tripRepository.save(testTrip);

        Trip existTrip = entityManager.find(Trip.class, savedTrip.getId());

        Assertions.assertEquals("test-trip", existTrip.getTitle());
        Assertions.assertEquals("test-description", existTrip.getDescription());
        
    }
    
}