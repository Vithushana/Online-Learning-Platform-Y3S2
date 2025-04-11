package com.example.backend.Respositotry;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.backend.Model.Category;

public interface CategoryRepository extends MongoRepository <Category, String>{
    
}
