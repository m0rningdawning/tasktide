package com.webdev.tasktidebe.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.webdev.tasktidebe.entities.UserEntity;
import com.webdev.tasktidebe.repositories.UserRepository;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public Iterable<UserEntity> findAllUsers() {
        return userRepository.findAll();
    }

    public UserEntity findOneUser(Integer id){
        return userRepository.findById(id).orElseThrow();
    }

    public Optional<UserEntity> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public Optional<UserEntity> findByPassword(String password) {
        return userRepository.findByPassword(password);
    }
}
