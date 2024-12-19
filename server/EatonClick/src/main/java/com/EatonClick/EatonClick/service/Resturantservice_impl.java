package com.EatonClick.EatonClick.service;

import com.EatonClick.EatonClick.dto.RestaurantDto;
import com.EatonClick.EatonClick.model.Address;
import com.EatonClick.EatonClick.model.Restaurant;
import com.EatonClick.EatonClick.model.User;
import com.EatonClick.EatonClick.repository.Address_repo;
import com.EatonClick.EatonClick.repository.Restaurant_repo;
import com.EatonClick.EatonClick.repository.User_repo;
import com.EatonClick.EatonClick.request.CreateRestaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class Resturantservice_impl implements Resturantservice {

    @Autowired
    Restaurant_repo restaurantRepo;

    @Autowired
    Address_repo addressRepo;

    @Autowired
    private User_repo userRepo;

    @Override
    public Restaurant createResturant(CreateRestaurant createRest, User user) {
        // Save address
        Address newAddress = addressRepo.save(createRest.getAddress());

        // Create new restaurant
        Restaurant newRestaurant = new Restaurant();
        newRestaurant.setName(createRest.getName());
        newRestaurant.setDescription(createRest.getDescription());
        newRestaurant.setCuisineType(createRest.getCuisineType());
        newRestaurant.setAddress(newAddress);
        newRestaurant.setContactInformation(createRest.getContactInformation());
        newRestaurant.setOpeningHours(createRest.getOpeningHours());
        newRestaurant.setImages(createRest.getImages());
        newRestaurant.setRegistrationDate(LocalDateTime.now());
        newRestaurant.setOwner(user);

        // Save and return the new restaurant
        return restaurantRepo.save(newRestaurant);
    }

    @Override
    public Restaurant updateResturant(Long id, CreateRestaurant updateRest) throws Exception {
        Restaurant restaurant = findResturantById(id);

        // Update fields if they are not null
        if (updateRest.getName() != null) {
            restaurant.setName(updateRest.getName());
        }
        if (updateRest.getDescription() != null) {
            restaurant.setDescription(updateRest.getDescription());
        }
        if (updateRest.getCuisineType() != null) {
            restaurant.setCuisineType(updateRest.getCuisineType());
        }
        if (updateRest.getAddress() != null) {
            restaurant.setAddress(updateRest.getAddress());
        }
        if (updateRest.getContactInformation() != null) {
            restaurant.setContactInformation(updateRest.getContactInformation());
        }
        if (updateRest.getOpeningHours() != null) {
            restaurant.setOpeningHours(updateRest.getOpeningHours());
        }
        if (updateRest.getImages() != null) {
            restaurant.setImages(updateRest.getImages());
        }

        return restaurantRepo.save(restaurant);
    }

    @Override
    public void deleteResturant(Long id) throws Exception {
        Restaurant restaurant = findResturantById(id);
        restaurantRepo.delete(restaurant);
    }

    @Override
    public List<Restaurant> getAllResturants() {
        return restaurantRepo.findAll();
    }

    @Override
    public List<Restaurant> searchResturants(String keyword) {
        return restaurantRepo.findBySearch(keyword);
    }

    @Override
    public Restaurant findResturantById(Long id) throws Exception {
        Optional<Restaurant> restaurant = restaurantRepo.findById(id);
        if (restaurant.isPresent()) {
            return restaurant.get();
        } else {
            throw new Exception("Restaurant not found with id " + id);
        }
    }

    @Override
    public Restaurant getResturantByUserId(Long userId) throws Exception {
        Restaurant restaurant = restaurantRepo.FindByOwnerId(userId);
        if (restaurant == null) {
            throw new Exception("Restaurant not found for user with id " + userId);
        }
        return restaurant;
    }

    @Override
    public RestaurantDto addFavorite(Long id, User user) throws Exception {
        // Find restaurant by ID
        Restaurant restaurant = findResturantById(id);

        // Create DTO for the restaurant
        RestaurantDto dto = new RestaurantDto();
        dto.setId(restaurant.getId());
        dto.setTitle(restaurant.getName());
        dto.setDescription(restaurant.getDescription());
        dto.setImages(restaurant.getImages());

        // Toggle favorite status
        if (user.getFavorites().contains(dto)) {
            user.getFavorites().remove(dto); // Remove from favorites
        } else {
            user.getFavorites().add(dto); // Add to favorites
        }

        // Save the updated user object
        userRepo.save(user);

        return dto; // Return the updated DTO
    }

    @Override
    public Restaurant updateResturantStatus(Long id) throws Exception {
        // Get restaurant by ID and update its status
        Restaurant restaurant = findResturantById(id);
        restaurant.setOpen(!restaurant.isOpen());
        return restaurantRepo.save(restaurant); // Save updated restaurant
    }
}
