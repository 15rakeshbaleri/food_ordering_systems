package com.EatonClick.EatonClick.repository;

import com.EatonClick.EatonClick.model.CartItems;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItem_repo extends JpaRepository<CartItems,Long> {
}
