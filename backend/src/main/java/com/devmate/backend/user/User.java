package com.devmate.backend.user;

import com.sun.istack.NotNull;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="user", schema = "public")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="password")
    @NotNull
    private String password;

    @Column(name="first_name")
    @NotNull
    private String first_name;

    @Column(name="last_name")
    @NotNull
    private String last_name;

    @Column(name="email")
    @NotNull
    private String email;

    public User(){

    }
    public User(String email, String password){
        this.email = email;
        this.password = password;
    }

    public User(String password, String first_name, String last_name, String email) {
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
    }

    public User(int id, String password, String first_name, String last_name, String email) {
        this.id = id;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
    }
}
