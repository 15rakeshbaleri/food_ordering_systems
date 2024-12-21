package com.EatonClick.EatonClick.controller;

import com.EatonClick.EatonClick.model.IngredientCategory;
import com.EatonClick.EatonClick.model.IngredientsItem;
import com.EatonClick.EatonClick.request.IngredientCategoryReq;
import com.EatonClick.EatonClick.request.Ingredient_requst;
import com.EatonClick.EatonClick.service.Ingredientsservice;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/ingredients")
public class Ingredient_controller {

    @Autowired
    private Ingredientsservice  ingredientsservice;


    @PostMapping("/category")
    public ResponseEntity<IngredientCategory> createIngredientcategory(@RequestBody IngredientCategoryReq requst) throws Exception {

    IngredientCategory item = ingredientsservice.createIngredientcategory(requst.getName(),requst.getRestaurantId());
    return new ResponseEntity<>(item, HttpStatus.CREATED);

    }


    @PostMapping()
    public ResponseEntity<IngredientsItem> createIngredientitem(@RequestBody Ingredient_requst requst) throws Exception {

        IngredientsItem item = ingredientsservice.createingredient(requst.getRestaurantid(),requst.getName(),requst.getCategoryid());
        return new ResponseEntity<>(item, HttpStatus.CREATED);
    }


    @PutMapping("/{id}/stock")
    public ResponseEntity<IngredientsItem> updatestock(@PathVariable Long id) throws Exception {

        IngredientsItem item = ingredientsservice.updatestock(id);
        return new ResponseEntity<>(item, HttpStatus.OK);

    }



    @GetMapping("/restaurant/{id}")
    public ResponseEntity<List<IngredientsItem>> getResturantIngredients(@PathVariable Long id) throws Exception {

        List<IngredientsItem> items = ingredientsservice.findRestarentIngredients(id);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }


    @GetMapping("/restaurant/{id}/category")
    public ResponseEntity<List<IngredientCategory>> getResturantIngredientcategory(@PathVariable Long id) throws Exception {

        List<IngredientCategory> items = ingredientsservice.findIngredientCategorybyResturentId(id);
        return new ResponseEntity<>(items, HttpStatus.OK);
    }
}
