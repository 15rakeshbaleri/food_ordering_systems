package com.EatonClick.EatonClick.repository;

import com.EatonClick.EatonClick.model.IngredientCategory;
import com.EatonClick.EatonClick.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Ingredientcategory_repo extends JpaRepository<IngredientCategory, Long> {

    public List<IngredientCategory> findByRestaurantId(Long rest_id);
}
