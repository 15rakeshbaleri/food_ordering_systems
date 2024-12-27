package com.EatonClick.EatonClick.controller;


import com.EatonClick.EatonClick.config.JwtProvider;
import com.EatonClick.EatonClick.model.Cart;
import com.EatonClick.EatonClick.model.USER_ROLE;
import com.EatonClick.EatonClick.model.User;
import com.EatonClick.EatonClick.repository.Cart_repo;
import com.EatonClick.EatonClick.repository.User_repo;
import com.EatonClick.EatonClick.request.Login_req;
import com.EatonClick.EatonClick.response.AuthResponse;
import com.EatonClick.EatonClick.service.CustomUser_service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/auth")
public class Auth_controller {


    @Autowired
    private User_repo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private CustomUser_service customUser_service;
    @Autowired
    private Cart_repo cartRepo;

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws Exception {

        User isEmailExist = userRepo.findByEmail(user.getEmail());
        if (isEmailExist != null) {
            throw new Exception("email already exist");
        }

        User createdUser = new User();  // creating new user
        createdUser.setEmail(user.getEmail());
        createdUser.setFullname(user.getFullname());
        createdUser.setPassword(passwordEncoder.encode(user.getPassword()));
        createdUser.setRole(user.getRole());

        User savedUser = userRepo.save(createdUser);  //save user in repo

        Cart cart = new Cart();                     //creating new cart for each customer
        cart.setCustomer(savedUser);
        cartRepo.save(cart);


        Authentication authentication = new UsernamePasswordAuthenticationToken(savedUser.getEmail(), savedUser.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateToken(authentication);
        AuthResponse response = new AuthResponse();
        response.setJwt(jwt);
        response.setMessage("user created successfully");
        response.setRole(savedUser.getRole());
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> signIn(@RequestBody Login_req req) {
        String username=req.getEmail();
        String password=req.getPassword();

        Authentication authentication =  authenticate(username, password);
        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
        String roles = authorities.isEmpty()?null:authorities.iterator().next().getAuthority();

        String jwt = jwtProvider.generateToken(authentication);
        AuthResponse response = new AuthResponse();
        response.setJwt(jwt);
        response.setMessage("log in successfully");
        response.setRole(USER_ROLE.valueOf(roles));

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails = customUser_service.loadUserByUsername(username);

        if(userDetails==null){
            throw new BadCredentialsException("user not found");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("invalid password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails.getUsername(), userDetails.getPassword(), userDetails.getAuthorities());
    }
}