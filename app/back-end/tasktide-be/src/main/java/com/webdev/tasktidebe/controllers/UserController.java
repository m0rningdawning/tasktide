package com.webdev.tasktidebe.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.webdev.tasktidebe.entities.UserEntity;
import com.webdev.tasktidebe.services.UserService;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/")
    public ResponseEntity<String> homeMessage(){
        return new ResponseEntity<>("Welcome to the main page!", HttpStatus.OK);
    }

    @GetMapping("/users")
    public ResponseEntity<Iterable<UserEntity>> findAllGuests() {
        return new ResponseEntity<>(userService.findAllUsers(), HttpStatus.OK);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<UserEntity> findOneUser(@PathVariable Integer id) {
        return new ResponseEntity<>(userService.findOneUser(id), HttpStatus.OK);
    }

    @GetMapping("/guests/{email}")
    public ResponseEntity<Optional<UserEntity>> findOneGuestEmail(@PathVariable String email){
        return new ResponseEntity<>(userService.findByEmail(email), HttpStatus.OK);
    }
}
