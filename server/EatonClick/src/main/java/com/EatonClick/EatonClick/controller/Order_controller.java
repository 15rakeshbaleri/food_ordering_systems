package com.EatonClick.EatonClick.controller;

import com.EatonClick.EatonClick.model.CartItems;
import com.EatonClick.EatonClick.model.Order;
import com.EatonClick.EatonClick.model.User;
import com.EatonClick.EatonClick.request.CreateOrder_requst;
import com.EatonClick.EatonClick.response.Payment_response;
import com.EatonClick.EatonClick.service.Orderservice;
import com.EatonClick.EatonClick.service.Payment_service;
import com.EatonClick.EatonClick.service.Userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin

@RestController
@RequestMapping("/api")
public class Order_controller {

    @Autowired
    private Orderservice orderService;
    @Autowired
    private Userservice userService;
    @Autowired
    private Payment_service  paymentService;

    @PostMapping("/order")
    public ResponseEntity<Payment_response> createOrder(@RequestBody  CreateOrder_requst request,@RequestHeader("Authorization") String token)
            throws Exception {

        User user = userService.findUserByJwttocken(token);
        Order order = orderService.CreateOrder(request, user);
        Payment_response response = paymentService.create_payment_link(order)   ;
        return new ResponseEntity<>(response, HttpStatus.CREATED);

    }

    @GetMapping("/order/user")
    public ResponseEntity<List<Order>> get_orderhistory(@RequestHeader("Authorization") String token)
            throws Exception {

        User user = userService.findUserByJwttocken(token);
        List<Order> orders = orderService.getUserOrder(user.getId()) ;
        return new ResponseEntity<>(orders, HttpStatus.OK);

    }
}
