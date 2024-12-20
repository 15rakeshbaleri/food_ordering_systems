package com.EatonClick.EatonClick.repository;

import com.EatonClick.EatonClick.model.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Address_repo extends JpaRepository<Address, Long> {


}
