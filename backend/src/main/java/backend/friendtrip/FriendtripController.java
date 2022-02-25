package backend.friendtrip;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import backend.friendtrip.core.User;
import backend.friendtrip.core.UserRepository;


@Controller
@CrossOrigin(origins="http://localhost:3000")
public class FriendtripController {
	@Autowired
	UserRepository repo;

    @RequestMapping(value = "/")
	public String index() {
		return "index";
	}
	@RequestMapping(value="api/users")
	public List<User> getUsers() {
		return (List<User>) this.repo.findAll();

	}
	
	
}