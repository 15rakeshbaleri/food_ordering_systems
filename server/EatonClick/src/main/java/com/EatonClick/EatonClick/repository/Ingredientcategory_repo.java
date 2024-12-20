package com.EatonClick.EatonClick.repository;

import com.EatonClick.EatonClick.model.IngredientCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Ingredientcategory_repo extends JpaRepository<IngredientCategory, Long> {
}
