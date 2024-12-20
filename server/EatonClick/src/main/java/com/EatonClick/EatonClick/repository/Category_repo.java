package com.EatonClick.EatonClick.repository;

import com.EatonClick.EatonClick.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Category_repo extends JpaRepository<Category, Long> {

    public List<Category> findCategoryByResturentId(Long resturentId);

}
