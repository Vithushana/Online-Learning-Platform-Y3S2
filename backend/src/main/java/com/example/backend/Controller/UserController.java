package com.example.backend.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Services.UserService;
import com.example.backend.Model.User;

@CrossOrigin(origins = "http://localhost:3000") // for React
@RestController
@RequestMapping("/api/auth")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public Object login(@RequestBody User user) {
        Optional<User> result = userService.login(user.getEmail(), user.getPassword(), user.getRole());

        if (result.isPresent()) {
            return result.get();
        } else {
            return new Error("Invalid email or password.");
        }
    }
}
