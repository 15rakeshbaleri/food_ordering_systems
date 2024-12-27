package com.EatonClick.EatonClick.service;


import com.EatonClick.EatonClick.model.Category;
import com.EatonClick.EatonClick.model.Food;
import com.EatonClick.EatonClick.model.Restaurant;
import com.EatonClick.EatonClick.repository.Food_repo;
import com.EatonClick.EatonClick.request.CreateFoodreq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class Foodservice_impl implements Food_service {

    @Autowired
   private  Food_repo   food_repo;

    @Override
    public Food createFood(CreateFoodreq createFoodreq, Category category, Restaurant restaurant) {

        Food food = new Food();
        food.setName(createFoodreq.getName());
        food.setDescription(createFoodreq.getDescription());
        food.setPrice(createFoodreq.getPrice());
        food.setFoodCategory(category);
        food.setImages(createFoodreq.getImage());
        food.setAvailable(true);

        food.setRestaurant(restaurant);
        food.setVegetarian(createFoodreq.isVegetarian());
        food.setSeasonal(createFoodreq.isSeasonal());
        food.setIngredients(createFoodreq.getIngredients());
    food.setCreationDate(new Date());
        Food save = food_repo.save(food);
        restaurant.getFoods().add(save);
        return save;
    }

    @Override
    public void deleteFood(Long foodid) throws Exception {
    Food food = food_repo.findById(foodid).get();
    food.setRestaurant(null);
        food_repo.save(food);


    }

    @Override
    public List<Food> getRestaurantFoods(Long resturentId, boolean isVegetarian,
                                         boolean isSeasonal, boolean isNonVeg,
                                         String foodcategory) throws Exception {

    List<Food> foods = food_repo.findByRestaurantId(resturentId);

        if(isNonVeg){
            foods=filterNonVegFoods(foods,isNonVeg);  //defined methods
        }
        if(isVegetarian){
            foods=filterVegetarianFoods(foods,isVegetarian);
        }
        if(isSeasonal){
            foods=filterSeasonalFoods(foods,isSeasonal);
        }
        if(foodcategory!=null && !foodcategory.equals("")){
            foods=filterByCategory(foods,foodcategory);
        }

        return foods;
    }

    private List<Food> filterByCategory(List<Food> foods, String foodcategory) {


        return foods.stream()
                .filter(food -> {
                    if (food.getFoodCategory() == null || food.getFoodCategory().getName() == null) {

                        return false;
                    }
                    return food.getFoodCategory().getName().equals(foodcategory);
                })
                .collect(Collectors.toList());

    }

    private List<Food> filterSeasonalFoods(List<Food> foods, boolean isSeasonal) {
return foods.stream().filter(f->f.isSeasonal()==isSeasonal).collect(Collectors.toList());
    }

    private List<Food> filterVegetarianFoods(List<Food> foods, boolean isVegetarian) {
        return foods.stream().filter(f->f.isVegetarian()==isVegetarian).collect(Collectors.toList());
    }

    private List<Food> filterNonVegFoods(List<Food> foods, boolean isNonVeg) {
        return foods.stream().filter(f->f.isVegetarian()==false).collect(Collectors.toList());
    }


    @Override
    public List<Food> serchFood(String keyword) {
        return food_repo.serchFood(keyword);
    }

    @Override
    public Food getFoodById(Long id) throws Exception {
        Optional<Food> food = food_repo.findById(id);

        if (food.isPresent()) {
            return food.get();
        }

     else {
            throw new Exception("Food not found with id " + id);
        }
    }

    @Override
    public Food updateFoodavlability(Long id) throws Exception {
        Food food = getFoodById(id);
        if (food != null) {
            food.setAvailable(!food.isAvailable());
            return food_repo.save(food);
        }
        return null;
    }
}
