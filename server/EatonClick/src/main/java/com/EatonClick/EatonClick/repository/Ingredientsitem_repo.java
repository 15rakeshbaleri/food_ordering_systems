package com.EatonClick.EatonClick.repository;

import com.EatonClick.EatonClick.model.IngredientCategory;
import com.EatonClick.EatonClick.model.IngredientsItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Ingredientsitem_repo extends JpaRepository<IngredientsItem, Long> {

}
