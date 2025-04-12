package com.example.backend.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Model.Course;
import com.example.backend.Respositotry.CourseRepository;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepository;

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Course addCourse(Course course) {
        return courseRepository.save(course);
    }

    public Course updateCourse(String id, Course course) {
        course.setId(id);
        return courseRepository.save(course);
    }

    public void deleteCourse(String id) {
        courseRepository.deleteById(id);
    }
}
