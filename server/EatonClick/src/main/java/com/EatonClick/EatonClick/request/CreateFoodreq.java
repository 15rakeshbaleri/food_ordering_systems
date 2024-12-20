package com.EatonClick.EatonClick.request;

import com.EatonClick.EatonClick.model.Category;
import com.EatonClick.EatonClick.model.IngredientsItem;
import lombok.Data;

import java.util.List;

@Data
public class CreateFoodreq {

    private String name;
    private String description;
    private List<String> image;
    private Long price;

        private Category category;
    private Long restaurantId;
    private boolean Vegetarian;
    private boolean Seasonal;

    private List<IngredientsItem > ingredients;
}
