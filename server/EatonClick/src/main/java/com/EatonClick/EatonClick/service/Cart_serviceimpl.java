package com.EatonClick.EatonClick.service;

import com.EatonClick.EatonClick.model.Cart;
import com.EatonClick.EatonClick.model.CartItems;
import com.EatonClick.EatonClick.model.Food;
import com.EatonClick.EatonClick.model.User;
import com.EatonClick.EatonClick.repository.CartItem_repo;
import com.EatonClick.EatonClick.repository.Cart_repo;
import com.EatonClick.EatonClick.repository.Food_repo;
import com.EatonClick.EatonClick.request.Addcart_requst;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class Cart_serviceimpl implements CartService {


    @Autowired
    private Userservice userservice;
    @Autowired
    private Cart_repo cart_repo;
    @Autowired
    private CartItem_repo cartItem_repo;
    @Autowired
    private Food_repo   food_repo;


    @Override
    public CartItems addToCart(Addcart_requst requst, String token) throws Exception {

        User user = userservice.findUserByJwttocken(token);
        Food food = food_repo.findById(requst.getFoodId()).get();
        Cart cart = cart_repo.findByCustomerId(user.getId());

        for (CartItems item : cart.getItems()) {
            if (item.getFood().equals(food)) {
                int newQuantity = item.getQuantity() + requst.getQuantity();

                return updateCartitemquantity(item.getId(), newQuantity);         }

            }
        CartItems item = new CartItems();
        item.setCart(cart);
        item.setFood(food);
        item.setQuantity(requst.getQuantity());
        item.setIngredients(requst.getIngredients());
        item.setTotalPrice(requst.getQuantity()*food.getPrice());

        CartItems saveditem = cartItem_repo.save(item);
        cart.getItems().add(saveditem);
        cart_repo.save(cart);
            return saveditem;

    }
    @Override
    public CartItems updateCartitemquantity(Long id, int quantity) throws Exception {
        Optional<CartItems> cartItemsOptional = cartItem_repo.findById(id);
        if (cartItemsOptional.isPresent()) {
            CartItems item = cartItemsOptional.get();
            item.setQuantity(quantity);
            item.setTotalPrice(quantity*item.getFood().getPrice());
            return cartItem_repo.save(item);
        }
        else {
            throw new Exception("Item not found");
        }

    }

    @Override
    public Cart removeItemfromCart(Long id, String token) throws Exception {
       User user = userservice.findUserByJwttocken(token);
        Cart cart = cart_repo.findByCustomerId(user.getId());

        Optional<CartItems> cartItemsOptional = cartItem_repo.findById(id);
        if (cartItemsOptional.isPresent()) {
            CartItems item = cartItemsOptional.get();
            cart.getItems().remove(item);

            return cart_repo.save(cart);
        }
        else {
            throw new Exception("Item not found");
        }
    }

    @Override
    public Long calculateTotal(Cart cart) throws Exception {
        Long total = 0L;
        for (CartItems item : cart.getItems()) {
            total += item.getFood().getPrice() * item.getQuantity();
        }
        return total;
    }

    @Override
    public Cart findcartbyId(Long ID) throws Exception {
       Optional<Cart> optionalCart=cart_repo.findById(ID);
    if(optionalCart.isEmpty()){
        throw new Exception("cart not found");
    }
    return optionalCart.get();
    }

    @Override
    public Cart findcartbyuserId(Long userID) throws Exception {
  //      User user = userservice.findUserByJwttocken(jwt);

        Cart cart = cart_repo.findByCustomerId(userID);
        cart.setTotal(calculateTotal(cart));
        return cart;
    }

    @Override
    public Cart clearCart(Long userID) throws Exception {

        Cart cart =findcartbyuserId(userID);
        cart.getItems().clear();

        return  cart_repo.save(cart);
    }
}
