package com.EatonClick.EatonClick.service;

import com.EatonClick.EatonClick.model.*;
import com.EatonClick.EatonClick.repository.*;
import com.EatonClick.EatonClick.request.CreateOrder_requst;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class Orderservice_impl implements Orderservice {


    @Autowired
    private User_repo userRepo;
    @Autowired
    private OrderitemRepository orderitemRepository;

    @Autowired
    private OrderRepository orderRepository ;

    @Autowired
    private Address_repo address_repo;

    @Autowired
    private Restaurant_repo restaurantRepo;

    @Autowired
    private Resturantservice resturantService;

    @Autowired
    private CartService cartService;

    @Override
    public Order CreateOrder(CreateOrder_requst request, User user) throws Exception {

        Address shipaddress= request.getDeliveryAddress();
        Address savedaddress= address_repo.save(shipaddress);

        if(!user.getAddresses().contains(savedaddress)){
            user.getAddresses().add(savedaddress);
            userRepo.save(user);
        }
        Restaurant restaurant=resturantService.findResturantById(request.getRestaurantId());
        Order order=new Order();
        order.setCustomer(user);
        order.setCreatedAt(new Date());
        order.setDeliveryAddress(savedaddress);
        order.setOrderStatus("PENDING");
        order.setRestaurant(restaurant);

        Cart cart=cartService.findcartbyuserId(user.getId());

        List<OrderItem> orderItems =new ArrayList<>();

        for(CartItems item:cart.getItems()){
            OrderItem orderItem=new OrderItem();
            orderItem.setFood(item.getFood());
            orderItem.setIngredients(item.getIngredients());
            orderItem.setQuantity(item.getQuantity());
            orderItem.setTotalPrice(item.getTotalPrice());


            OrderItem savedOrderItem=orderitemRepository.save(orderItem);
            orderItems.add(savedOrderItem);
        }

        Long totalprice=cartService.calculateTotal(cart);
        order.setItems(orderItems);
        order.setTotalPrice(totalprice);


        Order savadorder=orderRepository.save(order);

        restaurant.getOrders().add(savadorder);


        return order;



    }

    @Override
    public Order Updateorder(Long id, String orderStatus) throws Exception {
        Order order=findOrderById(id);
        if(orderStatus.equals("OUTFORDELIVERY")||
                orderStatus.equals("DELIVERED")||
                orderStatus.equals("PENDING")){

            order.setOrderStatus(orderStatus);
            return orderRepository.save(order);

        }
        throw new Exception("please enter a valid order status");
    }

    @Override
    public void cancelOrder(Long orderid) throws Exception {

        Order order=findOrderById(orderid);
        orderRepository.deleteById(orderid);

    }

    @Override
    public List<Order> getUserOrder(Long userid) throws Exception {
        return orderRepository.findByCustomer_Id(userid);
    }

    @Override
    public List<Order> getRestaurantOrder(Long restaurantid, String orderStatus) throws Exception {
        List<Order> orders = orderRepository.findByRestaurant_Id(restaurantid);

        if(orderStatus!=null){
            orders = orders.stream().filter(order ->
                    order.getOrderStatus().equals(orderStatus)).collect(Collectors.toList());
        }
        return orders;
    }


    @Override
    public Order findOrderById(Long id) throws Exception {
        Optional<Order> order=orderRepository.findById(id);

        if(order.isPresent()){
            return order.get();
        }
         throw new Exception("order not found");
    }

}
