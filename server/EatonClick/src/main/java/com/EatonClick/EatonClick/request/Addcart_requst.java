package com.EatonClick.EatonClick.request;

import lombok.Data;

import java.util.List;

@Data
public class Addcart_requst {
    private Long foodId;
    private int quantity;
    private List<String> ingredients;
}
