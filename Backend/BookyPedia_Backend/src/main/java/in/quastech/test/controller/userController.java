package in.quastech.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import in.quastech.test.entities.User;
import in.quastech.test.impl.UserServiceImpl;
import jakarta.servlet.http.HttpSession;

@CrossOrigin(origins="http://localhost:5173")
@RestController
public class userController {

	@Autowired
	private UserServiceImpl userServiceImpl;
	@PostMapping("/register")
	public String register(@RequestBody User user) {
		   boolean isRegistered = userServiceImpl.register(user);

	        if (isRegistered) {
	            return "User registered successfully";
	        } else {
	            return "Email already exists";
	        }
		
	}
	 // Login user
    @PostMapping("/login")
    public User login(@RequestBody User loginUser, HttpSession session) {
        User user = userServiceImpl.login(loginUser.getEmail(), loginUser.getPassword(), session);
        if (user!=null) {
            return user;
        }
        return user;
    }
    // Logout user
    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpSession session) {
        userServiceImpl.logout(session);
        return ResponseEntity.ok("Logout successful");
    }

    // Get logged-in user
    @GetMapping("/me")
    public ResponseEntity<?> getLoggedInUser(HttpSession session) {
        User user = userServiceImpl.getLoggedInUser(session);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("No user logged in");
        }
    }
}
