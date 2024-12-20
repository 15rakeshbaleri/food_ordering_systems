package com.EatonClick.EatonClick.service;

import com.EatonClick.EatonClick.model.IngredientCategory;
import com.EatonClick.EatonClick.model.IngredientsItem;
import com.EatonClick.EatonClick.repository.Ingredientcategory_repo;
import com.EatonClick.EatonClick.repository.Ingredientsitem_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Ingredientservice_impl implements Ingredientsservice {


    @Autowired
    private Ingredientsitem_repo ingredientsItem_repo;

    @Autowired
    private Ingredientcategory_repo ingredientcategory_repo;



    @Override
    public IngredientCategory findIngredientById(String name, Long id) throws Exception {
        return null;
    }

    @Override
    public IngredientCategory findIngredientById(Long id) throws Exception {
        return null;
    }

    @Override
    public List<IngredientCategory> findIngredientCategorybyResturentId(Long id) throws Exception {
        return List.of();
    }

    @Override
    public IngredientsItem createingredient(Long restid, String ingredientname, Long categoryid) throws Exception {
        return null;
    }

    @Override
    public List<IngredientsItem> findRestarentIngredients(Long restaurantid) throws Exception {
        return List.of();
    }

    @Override
    public IngredientsItem updatestock(Long id) throws Exception {
        return null;
    }
}
