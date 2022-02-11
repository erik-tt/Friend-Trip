package Backend.Friendtrip.core;



import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {

  User findById(long id);
  
  
  

}