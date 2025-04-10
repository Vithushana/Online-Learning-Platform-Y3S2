package com.example.backend.Respositotry;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.backend.Model.User;

public interface UserRepository extends MongoRepository<User, String> {
    Optional<User> findByEmailAndRole(String email, String role);
}
