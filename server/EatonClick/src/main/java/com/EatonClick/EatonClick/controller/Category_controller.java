package com.EatonClick.EatonClick.controller;

import com.EatonClick.EatonClick.model.Category;
import com.EatonClick.EatonClick.model.User;
import com.EatonClick.EatonClick.service.Catagory_service;
import com.EatonClick.EatonClick.service.Userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class Category_controller {

    @Autowired
    private Catagory_service catagory_service;

    @Autowired
    private Userservice userservice;

    @PostMapping("/admin/category")
    public ResponseEntity<Category> createCategory(@RequestBody Category category  ,
                                                   @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userservice.findUserByJwttocken(jwt);
        Category createcategory = catagory_service.createCategory(category.getName(), user.getId());
        return new ResponseEntity<>(createcategory, HttpStatus.CREATED);
    }

    @GetMapping("/category/restaurant")
    public ResponseEntity<List<Category> > getResturantCategory(
                                                   @RequestHeader("Authorization") String jwt) throws Exception {

        User user = userservice.findUserByJwttocken(jwt);
        List<Category> createcategory = catagory_service.findCategoryByResturentId( user.getId());
        return new ResponseEntity<>(createcategory, HttpStatus.CREATED);
    }

}
