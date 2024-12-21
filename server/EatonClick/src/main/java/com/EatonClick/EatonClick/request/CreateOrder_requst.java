package com.EatonClick.EatonClick.request;

import com.EatonClick.EatonClick.model.Address;
import com.EatonClick.EatonClick.model.Order;
import lombok.Data;

@Data
public class CreateOrder_requst {


    private Long restaurantId;
    private Address deliveryAddress;
}
