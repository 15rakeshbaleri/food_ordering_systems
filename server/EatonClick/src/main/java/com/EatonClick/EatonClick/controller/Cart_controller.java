package com.EatonClick.EatonClick.controller;

import com.EatonClick.EatonClick.model.Cart;
import com.EatonClick.EatonClick.model.CartItems;
import com.EatonClick.EatonClick.model.User;
import com.EatonClick.EatonClick.request.Addcart_requst;
import com.EatonClick.EatonClick.request.Updatecartitem_request;
import com.EatonClick.EatonClick.service.CartService;
import com.EatonClick.EatonClick.service.Userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class Cart_controller {

    @Autowired
    CartService cart_service;

    @Autowired
    Userservice userservice;


    @PutMapping("/cart/add")
    public ResponseEntity<CartItems> add_tocart(@RequestBody Addcart_requst requst,
                                               @RequestHeader("Authorization") String token) throws Exception {


       CartItems item =  cart_service.addToCart(requst, token);
       return new ResponseEntity<>(item, HttpStatus.CREATED);
    }


    @PutMapping("/cart-item/update")
    public ResponseEntity<CartItems> update_cartitem(@RequestBody Updatecartitem_request requst,
                                                    @RequestHeader("Authorization") String jwt)
                                                throws Exception {

        CartItems item = cart_service.updateCartitemquantity(requst.getCartid(), requst.getQuantity());

        return new ResponseEntity<>(item, HttpStatus.OK);
    }



    @DeleteMapping("/cart-item/{id}/remove")
    public ResponseEntity<Cart> remove_cartitem(@PathVariable Long id,
                                                @RequestHeader("Authorization") String jwt)
                                                throws Exception {

        Cart item = cart_service.removeItemfromCart(id, jwt);

        return new ResponseEntity<>(item, HttpStatus.OK);
    }


    @PutMapping("/cart-item/clear")
    public ResponseEntity<Cart> Clear_cart(
                                                @RequestHeader("Authorization") String jwt)
            throws Exception {
    User user = userservice.findUserByJwttocken(jwt);
        Cart item = cart_service.clearCart(user.getId());

        return new ResponseEntity<>(item, HttpStatus.OK);
    }

    @GetMapping("/cart")
    public ResponseEntity<Cart> Get_Usercart(
            @RequestHeader("Authorization") String jwt)
            throws Exception {
        User user = userservice.findUserByJwttocken(jwt);

        Cart item = cart_service.findcartbyuserId(user.getId());

        return new ResponseEntity<>(item, HttpStatus.OK);
    }



}
