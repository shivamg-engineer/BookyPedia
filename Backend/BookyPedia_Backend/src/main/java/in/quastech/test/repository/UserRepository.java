package in.quastech.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.quastech.test.entities.User;

public interface UserRepository extends JpaRepository<User, Integer>{

	  // Check if a user with given email exists
    boolean existsByEmail(String email);
    
    // Find user by email (used for login, etc.)
    User findByEmail(String email);

	boolean existsByPassword(String password);

}
