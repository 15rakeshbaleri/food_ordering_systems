package com.EatonClick.EatonClick.controller;


import com.EatonClick.EatonClick.model.Order;
import com.EatonClick.EatonClick.model.User;
import com.EatonClick.EatonClick.request.CreateOrder_requst;
import com.EatonClick.EatonClick.service.Orderservice;
import com.EatonClick.EatonClick.service.Userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminOrder_controller {

    @Autowired
    private Orderservice orderService;
    @Autowired
    private Userservice userService;



    @GetMapping("/order/restaurant/{id}")
    public ResponseEntity<List<Order>> get_orderhistory(@PathVariable Long id,@RequestParam String orderStatus,@RequestHeader("Authorization") String token)
            throws Exception {

        User user = userService.findUserByJwttocken(token);
        List<Order> orders = orderService.getRestaurantOrder(id,orderStatus) ;
        return new ResponseEntity<>(orders, HttpStatus.CREATED);

    }


    @PutMapping("/order/{orderid}/{orderStatus}")
    public ResponseEntity<Order> update_orderstatus(@PathVariable Long orderid,
                                                        @PathVariable String orderStatus,
                                                        @RequestHeader("Authorization") String token)throws Exception{


        User user = userService.findUserByJwttocken(token);
       Order orders = orderService.Updateorder(orderid,orderStatus);
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }


}
