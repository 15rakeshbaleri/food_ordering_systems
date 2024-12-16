package com.EatonClick.EatonClick.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class RestaurantDto {

    private String title;
    @Column(length = 1000)
    private List<String> images;
    private String description;
    @Id
    private Long id;

}
