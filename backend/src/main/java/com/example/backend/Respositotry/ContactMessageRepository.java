package com.example.backend.Respositotry;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.backend.Model.ContactMessage;

public interface ContactMessageRepository extends MongoRepository<ContactMessage, String> {
}
