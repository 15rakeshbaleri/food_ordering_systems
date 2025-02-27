package com.EatonClick.EatonClick.service;

import com.EatonClick.EatonClick.model.IngredientCategory;
import com.EatonClick.EatonClick.model.IngredientsItem;
import com.EatonClick.EatonClick.model.Restaurant;
import com.EatonClick.EatonClick.repository.Ingredientcategory_repo;
import com.EatonClick.EatonClick.repository.Ingredientsitem_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Ingredientservice_impl implements Ingredientsservice {


    @Autowired
    private Ingredientsitem_repo ingredientsItem_repo;

    @Autowired
    private Ingredientcategory_repo ingredientcategory_repo;

    @Autowired
    private Resturantservice resturantService;



    @Override
    public IngredientCategory createIngredientcategory(String name, Long rest_id) throws Exception {

        Restaurant restaurant = resturantService.findResturantById(rest_id);

        IngredientCategory ingredientCategory = new IngredientCategory();
        ingredientCategory.setRestaurant(restaurant);
        ingredientCategory.setName(name);
        return ingredientcategory_repo.save(ingredientCategory);

    }

    @Override
    public IngredientCategory findIngredientById(Long id) throws Exception {
        Optional<IngredientCategory> optionalIngredientCategory = ingredientcategory_repo.findById(id);

        if (optionalIngredientCategory.isEmpty()) {
            throw new Exception("Ingredient Category not found");
        }
        return optionalIngredientCategory.get();
    }

    @Override
    public List<IngredientCategory> findIngredientCategorybyResturentId(Long id) throws Exception {
        resturantService.findResturantById(id);

        return ingredientcategory_repo.findByRestaurantId(id);
    }

    @Override
    public IngredientsItem createingredient(Long restid, String ingredientname, Long categoryid) throws Exception {

        Restaurant restaurant = resturantService.findResturantById(restid);

        IngredientCategory category=findIngredientById(categoryid);

     IngredientsItem item = new IngredientsItem();
     item.setName(ingredientname);
     item.setCategory(category);
     item.setRestaurant(restaurant);
     IngredientsItem ingredientsItem = ingredientsItem_repo.save(item);
    category.getIngredients().add(ingredientsItem);
        return ingredientsItem;
    }

    @Override
    public List<IngredientsItem> findRestarentIngredients(Long restaurantid) throws Exception {
        return ingredientsItem_repo.findByRestaurantId(restaurantid);
    }

    @Override
    public IngredientsItem updatestock(Long id) throws Exception {
        Optional<IngredientsItem> optionalIngredientsItem = ingredientsItem_repo.findById(id);
        if (optionalIngredientsItem.isPresent()) {
            IngredientsItem ingredientsItem = optionalIngredientsItem.get();
            ingredientsItem.setInStock(!ingredientsItem.isInStock());
            return ingredientsItem_repo.save(ingredientsItem);
        }
        return null;
    }
}
