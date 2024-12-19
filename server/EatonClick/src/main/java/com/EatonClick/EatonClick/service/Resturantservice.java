package com.EatonClick.EatonClick.service;

import com.EatonClick.EatonClick.dto.RestaurantDto;
import com.EatonClick.EatonClick.model.Restaurant;
import com.EatonClick.EatonClick.model.User;
import com.EatonClick.EatonClick.request.CreateRestaurant;

import java.util.List;

public interface Resturantservice {
    public Restaurant createResturant(CreateRestaurant createRest, User user);
    public Restaurant updateResturant(Long id, CreateRestaurant updateRest) throws Exception;
    public void deleteResturant(Long id) throws Exception;

    public List<Restaurant> getAllResturants();
    public List<Restaurant> searchResturants(String keyword);
    public Restaurant findResturantById(Long id) throws Exception;
    public Restaurant getResturantByUserId(Long id) throws Exception;
    public RestaurantDto addFavorite(Long id, User user) throws Exception;
    public Restaurant updateResturantStatus(Long id) throws Exception;
}
