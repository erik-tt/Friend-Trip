package backend.friendtrip.core;

import org.springframework.data.repository.CrudRepository;

public interface CommercialUserRepository extends CrudRepository<CommercialUser, Long>  {

  boolean existsByUsername(String username);
  CommercialUser findByUsername(String username);
}