package com.EatonClick.EatonClick.controller;

import com.EatonClick.EatonClick.model.Food;
import com.EatonClick.EatonClick.model.Restaurant;
import com.EatonClick.EatonClick.model.User;
import com.EatonClick.EatonClick.request.CreateFoodreq;
import com.EatonClick.EatonClick.service.Food_service;
import com.EatonClick.EatonClick.service.Resturantservice;
import com.EatonClick.EatonClick.service.Userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin

@RestController
@RequestMapping("/api/food")
public class Food_controller {

    @Autowired
    private Food_service food_service;

    @Autowired
    private Userservice userservice;

    @Autowired
    private Resturantservice resturantService;



    @GetMapping("/search")
    public ResponseEntity<List<Food>> searchFood(@RequestParam String name,
                                                 @RequestHeader("Authorization") String jwt) throws Exception {
        User user = userservice.findUserByJwttocken(jwt);
        List<Food> foods = food_service.serchFood(name);
        return new ResponseEntity<>(foods, HttpStatus.CREATED);


    }


    @GetMapping("/resturant/{resturantid}")
    public ResponseEntity<List<Food>> GetResturantFood(@RequestParam(required = false) boolean Veg,
                                                       @RequestParam(required = false) boolean NonVeg,
                                                       @RequestParam(required = false) boolean seasonal,
                                                       @PathVariable Long resturantid,
                                                 @RequestParam(required = false) String category,
                                                 @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userservice.findUserByJwttocken(jwt);
       List<Food> foods = food_service.getRestaurantFoods(resturantid,Veg, seasonal,NonVeg, category);

        return  new ResponseEntity<>(foods, HttpStatus.OK);
    }
}