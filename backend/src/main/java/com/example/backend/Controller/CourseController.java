package com.example.backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.backend.Model.Course;
import com.example.backend.Services.CourseService;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "*")
public class CourseController {

    @Autowired
    private CourseService courseService;

    @GetMapping
    public List<Course> getCourses() {
        return courseService.getAllCourses();
    }

    @PostMapping
    public Course createCourse(@RequestBody Course course) {
        return courseService.addCourse(course);
    }

    @PutMapping("/{id}") 
    public Course updateCourse(@PathVariable String id, @RequestBody Course course) {
        return courseService.updateCourse(id, course);
    }

    @DeleteMapping("/{id}")
    public void deleteCourse(@PathVariable String id) {
        courseService.deleteCourse(id);
    }
}
