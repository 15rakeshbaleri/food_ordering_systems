package com.EatonClick.EatonClick.request;


import com.EatonClick.EatonClick.model.Address;
import com.EatonClick.EatonClick.model.ContactInformation;
import lombok.Data;

import java.util.List;

@Data
public class CreateRestaurant  {

    private Long Id;
    private String name;
    private String description;
    private String cuisineType;
    private Address address;
    private ContactInformation contactInformation;
    private String openingHours;
    private List<String> images;

}
