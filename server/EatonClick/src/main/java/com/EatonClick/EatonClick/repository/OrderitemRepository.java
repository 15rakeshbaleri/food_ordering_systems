package com.EatonClick.EatonClick.repository;

import com.EatonClick.EatonClick.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderitemRepository extends JpaRepository<OrderItem, Long> {


}
