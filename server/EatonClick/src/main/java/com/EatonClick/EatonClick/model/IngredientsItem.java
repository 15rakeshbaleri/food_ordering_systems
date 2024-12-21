package com.EatonClick.EatonClick.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class IngredientsItem {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    @ManyToOne
    private IngredientCategory  category;

    @ManyToOne
    private Restaurant restaurant;
    private boolean inStock=true;
}
