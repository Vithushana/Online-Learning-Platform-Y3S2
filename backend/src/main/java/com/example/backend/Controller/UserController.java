package com.example.backend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.backend.Services.UserService;
import com.example.backend.Model.User;



@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/auth")
public class UserController {
    @Autowired
    private UserService userService;

    // Register user
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        User savedUser = userService.register(user);
        return ResponseEntity.ok(savedUser);
    }
    

    // Login user
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        System.out.println("Login endpoint hit with email: " + user.getEmail());
        ResponseEntity<?> result = userService.login(user.getEmail(), user.getPassword(), user.getRole());
        return result;
    }
    
}
