package com.webdev.tasktidebe.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NonNull;

import java.time.LocalDate;

@Getter
@Entity
@Table(name = "users")
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @NonNull
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private LocalDate dateOfBirth;
    private String cardInfo;
    private String status;

    public int generateIdCustom() {
        long timestamp = System.currentTimeMillis();
        int randomNumber = (int) (Math.random() * 1000);
        return (int) (timestamp + randomNumber);
    }

    public UserEntity() {
    }

    public UserEntity(UserEntity user) {
        this.firstName = user.getFirstName();
        this.lastName = user.getLastName();
        this.email = user.getEmail();
        this.password = user.getPassword();
        this.dateOfBirth = user.getDateOfBirth();
        this.cardInfo = user.getCardInfo();
        this.status = user.getStatus();
    }
}
