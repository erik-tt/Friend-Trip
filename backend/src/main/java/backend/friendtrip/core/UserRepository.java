package backend.friendtrip.core;



import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

  
  boolean existsByuserName(String userName);
  User findByuserName(String userName);
  
  

}