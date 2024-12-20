package com.EatonClick.EatonClick.repository;

import com.EatonClick.EatonClick.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Food_repo extends JpaRepository<Food, Long> {

    List<Food> findByRestaurantId(Long restaurantId);
    @Query("SELECT f FROM Food f WHERE lower(f.name) LIKE lower(concat('%', :keyword, '%')) " +
            "OR lower(f.foodCategory.name) LIKE lower(concat('%', :keyword, '%'))")
    List<Food> serchFood(@Param("keyword") String keyword);

}
