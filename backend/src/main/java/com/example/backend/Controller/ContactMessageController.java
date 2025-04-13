// 📁 com.example.backend.Controller.ContactMessageController.java
package com.example.backend.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.backend.Model.ContactMessage;
import com.example.backend.Respositotry.ContactMessageRepository;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "*")
public class ContactMessageController {

    @Autowired
    private ContactMessageRepository repo;

    @PostMapping
    public ContactMessage saveMessage(@RequestBody ContactMessage message) {
        return repo.save(message);
    }

     @GetMapping
    public List<ContactMessage> getAllMessages() {
        return repo.findAll();
    }

    @DeleteMapping("/{id}")
    public void deleteContactMessage(@PathVariable String id) {
        repo.deleteById(id);
    }
}
