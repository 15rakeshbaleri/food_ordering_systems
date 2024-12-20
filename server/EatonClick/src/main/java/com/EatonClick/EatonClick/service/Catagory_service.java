package com.EatonClick.EatonClick.service;


import com.EatonClick.EatonClick.model.Category;

import java.util.List;

public interface Catagory_service {
    public Category createCategory( String name, Long UserId) throws Exception;
    public List<Category> findCategoryByResturentId(Long resturentId) throws Exception;
    public Category findCategoryById(Long id) throws Exception;
}
