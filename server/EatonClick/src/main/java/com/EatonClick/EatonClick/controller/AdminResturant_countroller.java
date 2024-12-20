package com.EatonClick.EatonClick.controller;

import com.EatonClick.EatonClick.model.Restaurant;
import com.EatonClick.EatonClick.model.User;
import com.EatonClick.EatonClick.request.CreateRestaurant;
import com.EatonClick.EatonClick.response.Message_response;
import com.EatonClick.EatonClick.service.Resturantservice;
import com.EatonClick.EatonClick.service.Userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/admin/restaurants")
@RestController
public class AdminResturant_countroller {

    @Autowired
    private Resturantservice resturantService;

    @Autowired
    private Userservice userService;


    @PostMapping()
    public ResponseEntity<Restaurant> createResturant(@RequestBody CreateRestaurant createRest,
                                                      @RequestHeader ("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwttocken(jwt);

        Restaurant resturant = resturantService.createResturant(createRest, user);
        return new ResponseEntity<>(resturant, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Restaurant> updateResturant(@RequestBody CreateRestaurant createRest,
                                                      @RequestHeader ("Authorization") String jwt,@PathVariable Long id) throws Exception {

        User user = userService.findUserByJwttocken(jwt);

        Restaurant resturant = resturantService.updateResturant(id, createRest);
        return new ResponseEntity<>(resturant, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Message_response> deleteResturant(
                                                      @RequestHeader ("Authorization") String jwt,
                                                      @PathVariable Long id)
                                                        throws Exception {

        User user = userService.findUserByJwttocken(jwt);
        Message_response res=new Message_response();
        res.setMessage("Resturant deleted successfully");
        resturantService.deleteResturant(id);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PutMapping ("/{id}/status")
    public ResponseEntity<Restaurant> updateResturantStatus(
            @RequestHeader ("Authorization") String jwt,
            @PathVariable Long id)
            throws Exception {

        User user = userService.findUserByJwttocken(jwt);

        Restaurant Restaurant = resturantService.updateResturantStatus(id);

        return new ResponseEntity<>(Restaurant, HttpStatus.OK);
    }

    @GetMapping ("/user")
    public ResponseEntity<Restaurant> findResturantByUserId(
            @RequestHeader ("Authorization") String jwt)
            throws Exception {

        User user = userService.findUserByJwttocken(jwt);

        Restaurant Restaurant = resturantService.getResturantByUserId(user.getId());

        return new ResponseEntity<>(Restaurant, HttpStatus.OK);
    }
}

