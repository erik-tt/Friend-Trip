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
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TestEntityManager entityManager;

    @Test
    public void testCreateUser() {
        User testUser = new User("test-user", "password!1");

        User savedUser = userRepository.save(testUser);

        User existUser = entityManager.find(User.class, savedUser.getId());

        Assertions.assertEquals("test-user", existUser.getUsername());
        Assertions.assertEquals("password!1", existUser.getPassword());
        
    }
    
}
