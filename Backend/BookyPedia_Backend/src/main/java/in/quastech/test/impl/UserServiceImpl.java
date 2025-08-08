package in.quastech.test.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import in.quastech.test.entities.User;
import in.quastech.test.repository.UserRepository;
import in.quastech.test.service.UserService;
import jakarta.servlet.http.HttpSession;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
    private UserRepository userRepo;

    @Override
    public User login(String email, String password, HttpSession session) {
        User user = userRepo.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            session.setAttribute("user", user); // store user in session
            return user;
        }
        return user;
    }

    @Override
    public boolean register(User user) {
        if (userRepo.findByEmail(user.getEmail()) != null) {
            return false; // already exists
        }
        userRepo.save(user);
        return true;
    }

    @Override
    public void logout(HttpSession session) {
        session.invalidate(); // clear session
    }

    @Override
    public User getLoggedInUser(HttpSession session) {
        return (User) session.getAttribute("user");
    }

}
