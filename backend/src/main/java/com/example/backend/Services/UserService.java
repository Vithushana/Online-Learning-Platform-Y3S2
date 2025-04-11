package com.example.backend.Services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.backend.Model.User;
import com.example.backend.Respositotry.UserRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class UserService {
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<?> login(String email, String password, String role) {
        logger.info("Attempting login for email: {}, role: {}", email, role);

        User existingUser = userRepository.findByEmailAndRole(email, role);

        if (existingUser != null) {
            logger.info("User found: {}", existingUser.getEmail());

            if (existingUser.getPassword().equals(password)) {
                logger.info("Password match for user: {}", email);
                return ResponseEntity.ok(existingUser);
            } else {
                logger.warn("Invalid password for user: {}", email);
                return ResponseEntity.status(401).body("Invalid password.");
            }
        } else {
            logger.warn("User not found for email: {} and role: {}", email, role);
            return ResponseEntity.status(404).body("User not found.");
        }
    }

    public User register(User user) {
        logger.info("Registering new user with email: {}", user.getEmail());
        return userRepository.save(user);
    }
}
