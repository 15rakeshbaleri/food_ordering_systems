package com.EatonClick.EatonClick.dto;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Embeddable
public class RestaurantDto {

    private String title;

    @Column(length = 1000)
    private List<String> images;
    @Column(length = 1000)
    private String description;

    private Long id;

}
