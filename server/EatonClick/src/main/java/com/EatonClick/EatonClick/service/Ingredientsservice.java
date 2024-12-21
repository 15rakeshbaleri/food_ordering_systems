package com.EatonClick.EatonClick.service;

import com.EatonClick.EatonClick.model.IngredientCategory;
import com.EatonClick.EatonClick.model.IngredientsItem;

import java.util.List;

public interface Ingredientsservice {

    public IngredientCategory createIngredientcategory(String name,Long id) throws Exception;

    public IngredientCategory findIngredientById(Long id) throws Exception;

    public List<IngredientCategory> findIngredientCategorybyResturentId(Long id) throws Exception;

    public IngredientsItem createingredient(Long restid,String ingredientname,Long categoryid) throws Exception;

    public List<IngredientsItem> findRestarentIngredients(Long restaurantid) throws Exception;

    public IngredientsItem updatestock(Long id) throws Exception;

}
