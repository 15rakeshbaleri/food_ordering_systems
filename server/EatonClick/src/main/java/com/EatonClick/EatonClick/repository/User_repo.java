package com.EatonClick.EatonClick.repository;

import com.EatonClick.EatonClick.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface User_repo extends JpaRepository<User,Long> {

    public User findByEmail(String email);
}
