package backend.friendtrip.core;




import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository<User, Long> {

  
  boolean existsByuserName(String userName);
  User findByuserName(String userName);
  
  

}