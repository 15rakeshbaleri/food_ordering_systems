package com.EatonClick.EatonClick.repository;

import com.EatonClick.EatonClick.model.Order;
import com.EatonClick.EatonClick.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    List<Order> findByCustomer_Id(Long userId);

    List<Order> findByRestaurant_Id(Long restaurantId);
}
