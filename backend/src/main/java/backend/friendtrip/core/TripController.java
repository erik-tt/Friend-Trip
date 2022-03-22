package backend.friendtrip.core;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
class TripController {
private final TripRepository repository;

  TripController(TripRepository repository) {
    this.repository = repository;
  }

}

