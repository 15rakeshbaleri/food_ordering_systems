package com.EatonClick.EatonClick.repository;

import com.EatonClick.EatonClick.model.IngredientCategory;
import com.EatonClick.EatonClick.model.IngredientsItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Ingredientsitem_repo extends JpaRepository<IngredientsItem, Long> {


    List<IngredientsItem> findByRestaurantId(Long rest_id);
}
