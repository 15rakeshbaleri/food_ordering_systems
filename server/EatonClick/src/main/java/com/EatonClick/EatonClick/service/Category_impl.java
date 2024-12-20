package com.EatonClick.EatonClick.service;

import com.EatonClick.EatonClick.model.Category;
import com.EatonClick.EatonClick.model.Restaurant;
import com.EatonClick.EatonClick.repository.Category_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class Category_impl implements Catagory_service {

    @Autowired
    private Category_repo category_repo;

    @Autowired
    private Resturantservice resturantService;

    @Override
    public Category createCategory(String name, Long UserId) throws Exception {
        Restaurant restaurant = resturantService.findResturantById(UserId);
        Category category = new Category();
        category.setName(name);
        category.setRestaurant(restaurant);
        return category_repo.save(category);
    }

    @Override
    public List<Category> findCategoryByResturentId(Long resturentId) throws Exception {
        return category_repo.findCategoryByResturentId(resturentId);
    }

    @Override
    public Category findCategoryById(Long id) throws Exception {

        Optional<Category> optionalCategory = category_repo.findById(id);
        if (optionalCategory.isEmpty()) {
       throw new Exception("Category not found " );
        }
        return optionalCategory.get();
    }
}
