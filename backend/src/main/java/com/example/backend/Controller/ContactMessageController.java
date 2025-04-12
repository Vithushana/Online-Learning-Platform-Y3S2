// 📁 com.example.backend.Controller.ContactMessageController.java
package com.example.backend.Controller;

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
}
