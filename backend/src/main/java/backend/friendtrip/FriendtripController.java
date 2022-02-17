package backend.friendtrip;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class FriendtripController {

    @RequestMapping(value = "/")
	public String index() {
		return "index";
	}
}