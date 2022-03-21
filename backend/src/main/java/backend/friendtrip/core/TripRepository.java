

package backend.friendtrip.core;




import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;

public interface TripRepository extends PagingAndSortingRepository<Trip, Long> {

  
  boolean existsByTitle(String title);
  Trip findByTitle(String title);
  List<Trip> findAll();

}