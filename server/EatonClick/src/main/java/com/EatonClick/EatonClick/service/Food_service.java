package com.EatonClick.EatonClick.service;

import com.EatonClick.EatonClick.model.Category;
import com.EatonClick.EatonClick.model.Food;
import com.EatonClick.EatonClick.model.Restaurant;
import com.EatonClick.EatonClick.request.CreateFoodreq;

import java.util.List;

public interface Food_service {

    public Food createFood(CreateFoodreq createFoodreq, Category category, Restaurant restaurant);
   public void deleteFood(Long id)throws Exception;
   public List<Food> getRestaurantFoods(Long resturentId,boolean isVegetarian,
                                        boolean isSeasonal,boolean isNonVeg,
                                        String foodcategory)throws Exception;
   public List<Food> serchFood(String keyword) ;
   public Food getFoodById(Long id) throws Exception;
   public Food updateFoodavlability(Long id) throws Exception;
}
