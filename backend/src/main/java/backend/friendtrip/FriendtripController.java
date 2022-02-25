package backend.friendtrip;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import backend.friendtrip.core.User;
import backend.friendtrip.core.UserRepository;


@RestController

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