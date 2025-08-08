package in.quastech.test.service;

import in.quastech.test.entities.User;
import jakarta.servlet.http.HttpSession;

public interface UserService {
	public User login(String email, String password, HttpSession session);

	public boolean register(User user);

	public void logout(HttpSession session);

	public User getLoggedInUser(HttpSession session);

}
