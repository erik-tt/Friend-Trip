package backend.friendtrip.core;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner { 

	private final UserRepository repository;

	@Autowired 
	public DatabaseLoader(UserRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		if(!repository.existsByUsername("admin")){
			User admin = new User("admin", "1234-Abcd");
			admin.setAdmin(true);
			this.repository.save(admin);
		}
	}
}