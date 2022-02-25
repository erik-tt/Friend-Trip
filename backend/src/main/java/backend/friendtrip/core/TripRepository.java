

package backend.friendtrip.core;



import org.springframework.data.repository.CrudRepository;

public interface TripRepository extends CrudRepository<Trip, Long> {

  
  boolean existsByTitle(String title);
  Trip findByTitle(String title);

}