package Backend.Friendtrip.core;



import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

  
  boolean existsByusername(String userName);
  User findByusername(String userName);
  
  

}