package backend.friendtrip.core;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class UserController {

  private final UserRepository repository;

  UserController(UserRepository repository) {
    this.repository = repository;
  }
  

  @PostMapping("/api/login")
  ResponseEntity<String> token(@RequestBody User newUser) {
      if(repository.existsByUsername(newUser.getUsername()) && repository.findByUsername(newUser.getUsername()).getPassword().equals(newUser.getPassword()) && repository.findByUsername(newUser.getUsername()).getRole().equals("ADMIN")){
            Long token = repository.findByUsername(newUser.getUsername()).getId();
            token = token-(token*2);
            return new ResponseEntity<>("{\"token\":\"" + token +"\"}", HttpStatus.OK);
        } else if (!repository.existsByUsername(newUser.getUsername()) && repository.findByUsername(newUser.getUsername()).getPassword().equals(newUser.getPassword()) && repository.findByUsername(newUser.getUsername()).getRole().equals("ADMIN")){
            Long token = repository.findByUsername(newUser.getUsername()).getId();
            return new ResponseEntity<>("{\"token\":\"" + token +"\"}", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Username or password inccorrect", HttpStatus.NOT_FOUND);
        }
    
      }
    
    
/* 
  // Aggregate root
  // tag::get-aggregate-root[]
  @GetMapping("/users")
  List<User> all() {
    return repository.findAll();
  }
  // end::get-aggregate-root[]

  @PostMapping("/users")
  User newUser(@RequestBody User newUser) {
    return repository.save(newUser);
  }

  // Single item
  
  @GetMapping("/users/{id}")
  User one(@PathVariable Long id) {
    
    return repository.findById(id)
    .orElseThrow(() -> new UserNotFoundException(id));
  }

  @PutMapping("/users/{id}")
  User replaceUser(@RequestBody User newUser, @PathVariable Long id) {
    
    return repository.findById(id)
      .map(user -> {
        user.setUsername(newUser.getUsername());
        user.setPassword(newUser.getPassword());
        user.setRole(newUser.getRole());
        return repository.save(user);
      })
      .orElseGet(() -> {
        newUser.setId(id);
        return repository.save(newUser);
      });
  }


  @DeleteMapping("/users/{id}")
  void deleteUser(@PathVariable Long id) {
    repository.deleteById(id);
  } */
} 