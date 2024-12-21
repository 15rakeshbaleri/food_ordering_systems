package com.EatonClick.EatonClick.service;

import com.EatonClick.EatonClick.model.Order;
import com.EatonClick.EatonClick.model.User;
import com.EatonClick.EatonClick.request.CreateOrder_requst;

import java.util.List;

public interface Orderservice {

    public Order CreateOrder(CreateOrder_requst request, User user) throws Exception;

    public Order Updateorder (Long id, String orderStatus) throws Exception;

    public void cancelOrder (Long id) throws Exception;

    public List<Order> getUserOrder(Long userid) throws Exception;

    public List<Order> getRestaurantOrder(Long restaurantid,String orderStatus) throws Exception;


    public Order findOrderById(Long id) throws Exception;

}
