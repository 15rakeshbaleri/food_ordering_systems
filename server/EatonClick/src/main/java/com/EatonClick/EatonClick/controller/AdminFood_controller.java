package com.EatonClick.EatonClick.controller;


import com.EatonClick.EatonClick.model.Food;
import com.EatonClick.EatonClick.model.Restaurant;
import com.EatonClick.EatonClick.model.User;
import com.EatonClick.EatonClick.request.CreateFoodreq;
import com.EatonClick.EatonClick.response.Message_response;
import com.EatonClick.EatonClick.service.Food_service;
import com.EatonClick.EatonClick.service.Resturantservice;
import com.EatonClick.EatonClick.service.Userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/food")
public class AdminFood_controller {

    @Autowired
    private Food_service food_service;

    @Autowired
    private Userservice userservice;

    @Autowired
    private Resturantservice resturantService;


    @PostMapping()
    private ResponseEntity<Food> createFood(@RequestBody CreateFoodreq Foodreq,
                                            @RequestHeader ("Authorization") String jwt) throws Exception {

        User user = userservice.findUserByJwttocken(jwt);
        Restaurant  restaurant = resturantService.findResturantById(Foodreq.getRestaurantId());
        Food food = food_service.createFood(Foodreq, Foodreq.getCategory(), restaurant);
        return new ResponseEntity<>(food, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    private ResponseEntity<Message_response> deleteFood(@PathVariable Long id,
                                            @RequestHeader ("Authorization") String jwt) throws Exception {

        User user = userservice.findUserByJwttocken(jwt);

            food_service.deleteFood(id);
        Message_response res=new Message_response();
        res.setMessage("Food deleted successfully");
        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }


    @PutMapping("/{id}")
    private ResponseEntity<Food> updateFoodavalblity(@PathVariable Long id,
                                                        @RequestHeader ("Authorization") String jwt) throws Exception {

        User user = userservice.findUserByJwttocken(jwt);

       Food food =food_service.updateFoodavlability(id);

        return new ResponseEntity<>(food, HttpStatus.CREATED);
    }
}
