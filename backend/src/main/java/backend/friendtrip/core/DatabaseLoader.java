package backend.friendtrip.core;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner { 

	private final UserRepository userRepository;
	private final TripRepository tripRepository;

	@Autowired 
	public DatabaseLoader(UserRepository repository1, TripRepository repository2) {
		this.userRepository = repository1;
		this.tripRepository = repository2;
	}

	@Override
	public void run(String... strings) throws Exception {
		if(!userRepository.existsByUsername("admin")){
			User admin = new User("admin", "1234-Abcd");
			admin.setAdmin(true);
			this.userRepository.save(admin);
		}
	}
}