package com.example.backend.Respositotry;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.Model.User;
@Repository
public interface UserRepository extends MongoRepository<User, String> {
    User findByEmailAndRole(String email, String role);
}
