package com.EatonClick.EatonClick.controller;

import com.EatonClick.EatonClick.dto.RestaurantDto;
import com.EatonClick.EatonClick.model.Restaurant;
import com.EatonClick.EatonClick.model.User;
import com.EatonClick.EatonClick.request.CreateRestaurant;
import com.EatonClick.EatonClick.service.Resturantservice;
import com.EatonClick.EatonClick.service.Userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin

@RestController
@RequestMapping("api/restaurants")
public class Restaurant_countroller {

    @Autowired
    private Resturantservice resturantService;

    @Autowired
    private Userservice userService;

    @GetMapping ("/search")
    public ResponseEntity<List<Restaurant>> createResturant(
                                                      @RequestHeader("Authorization") String jwt,
                                                      @RequestParam String key) throws Exception {

        User user = userService.findUserByJwttocken(jwt);

        List<Restaurant> resturants = resturantService.searchResturants(key);
        return new ResponseEntity<>(resturants, HttpStatus.OK);
    }

    @GetMapping ()
    public ResponseEntity<List<Restaurant>> getallresturants(
            @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwttocken(jwt);

        List<Restaurant> resturants = resturantService.getAllResturants();
        return new ResponseEntity<>(resturants, HttpStatus.OK);
    }

    @GetMapping ("/{id}")
    public ResponseEntity<Restaurant> findresturantbyid(
            @PathVariable Long id,
            @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwttocken(jwt);

        Restaurant restaurant = resturantService.findResturantById(id);
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

    @PutMapping ("/{id}/add-favorite")
    public ResponseEntity<RestaurantDto> addFavorite(
            @PathVariable Long id,
            @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userService.findUserByJwttocken(jwt);

        RestaurantDto restaurant = resturantService.addFavorite(id,user);
        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

}
