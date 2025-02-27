package com.EatonClick.EatonClick.service;

import com.EatonClick.EatonClick.model.Cart;
import com.EatonClick.EatonClick.model.CartItems;
import com.EatonClick.EatonClick.request.Addcart_requst;
import org.springframework.stereotype.Service;


public interface CartService {

    public CartItems addToCart(Addcart_requst requst, String token)throws Exception;

    public CartItems updateCartitemquantity(Long cartid, int quantity)throws  Exception;

    public Cart removeItemfromCart(Long id, String token)throws Exception;


    public Long calculateTotal(Cart cart) throws Exception;

    public Cart findcartbyId(Long ID) throws Exception;

    public Cart findcartbyuserId(Long ID) throws Exception;

    public Cart clearCart(Long ID) throws Exception;
}
