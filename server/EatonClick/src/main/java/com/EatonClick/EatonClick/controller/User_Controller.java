package com.EatonClick.EatonClick.controller;

import com.EatonClick.EatonClick.model.User;
import com.EatonClick.EatonClick.service.Userservice;
import com.EatonClick.EatonClick.service.Userserviceimpl;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@CrossOrigin

@RestController
@Data
@RequestMapping("/api/users")
public class User_Controller {

    @Autowired
    private Userservice userservice;


    @GetMapping("/profile")
    public ResponseEntity<User> findUserbyjwtToken(@RequestHeader("Authorization")String jwt) throws Exception {
    User user = userservice.findUserByJwttocken(jwt);
    return new ResponseEntity<>(user, HttpStatus.OK);

    }
}