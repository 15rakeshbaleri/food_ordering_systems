package com.EatonClick.EatonClick.repository;

import com.EatonClick.EatonClick.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Category_repo extends JpaRepository<Category, Long> {

    public List<Category> findCategoryByRestaurantId(Long resturentId);

}
