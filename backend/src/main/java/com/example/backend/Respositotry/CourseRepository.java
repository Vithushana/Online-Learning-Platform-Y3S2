package com.example.backend.Respositotry;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.backend.Model.Course;

public interface CourseRepository extends  MongoRepository<Course, String> {
}
