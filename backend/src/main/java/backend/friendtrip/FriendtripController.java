package backend.friendtrip;

import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/v2")
public class FriendtripController {

    @GetMapping(value = "/test", produces = "application/json")
    public String addTest() {
        return "Dette er en test";
    }

}