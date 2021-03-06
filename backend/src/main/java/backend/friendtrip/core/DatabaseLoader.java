package backend.friendtrip.core;

/* https://gist.github.com/zachowdhury/aa7aa4bba469e199ed36458a24c33a96 Code from github to fix CORS issues */

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
			User admin = new User("admin", "1234-Abcd", "ADMIN", "Bio");
			Trip trip1 = new Trip("Hyttetur", "Vi skal ut på tur og kose oss", admin, 3);
			Trip trip2 = new Trip("Skogstur", "Blasf asfjloasn saft på tur og kose oss", admin, 2);
			Trip trip3 = new Trip("Telttur", "Blasf asfjloasn saft pasdas asd og kose oss", admin, 2);

			
			this.userRepository.save(admin);
			this.tripRepository.save(trip1);
			this.tripRepository.save(trip2);
			this.tripRepository.save(trip3);
		}
		if(!userRepository.existsByUsername("commercial")) {
			User commercial = new User("Adam", "commercialTest123!", "COMMERCIAL", "I am a commercial user.");
			commercial.setCompanyName("test company");
			this.userRepository.save(commercial);
		}
	}
}