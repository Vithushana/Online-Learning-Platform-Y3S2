package com.example.backend.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.Model.Category;
import com.example.backend.Respositotry.CategoryRepository;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }

    public Category addCategory(Category category){
        return categoryRepository.save(category);
    }

    public void deleteCategory(String id){
        categoryRepository.deleteById(id);
    }

    public Category save(Category category) {
        return categoryRepository.save(category);
    }
}
