package backend.friendtrip.core;




import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface UserRepository extends PagingAndSortingRepository<User, Long> {

  
  boolean existsByUsername(String username);
  User findByUsername(String username);
  List<User> findAll();
  
  

}