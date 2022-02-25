package backend.friendtrip;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;



@Controller
@CrossOrigin(origins="http://localhost:3000")
public class FriendtripController {

    @RequestMapping(value = "/")
	public String index() {
		return "index";
	}
	
	
}