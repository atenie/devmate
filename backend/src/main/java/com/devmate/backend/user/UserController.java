package com.devmate.backend.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("log")
    public List<User> getUsers(){
        return (List<User>) userRepository.findAll();
    }

    @GetMapping("login")
    public boolean getUser(@RequestHeader String email, @RequestHeader String password) {
        return userRepository.findDistinctByEmailAndPassword(email, password) != null;
    }

    @PostMapping("register")
    public int register(@RequestHeader String password, @RequestHeader String first_name, @RequestHeader String last_name, @RequestHeader String email){
        return userRepository.register(password,first_name,last_name,email);
    }

}
