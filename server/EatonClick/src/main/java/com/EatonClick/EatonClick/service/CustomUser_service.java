package com.EatonClick.EatonClick.service;

import com.EatonClick.EatonClick.model.USER_ROLE;
import com.EatonClick.EatonClick.model.User;
import com.EatonClick.EatonClick.repository.User_repo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomUser_service implements UserDetailsService {

    @Autowired
    User_repo User_repo;



    @Override
    public  UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = User_repo.findByEmail(username);
        if(user==null){
            throw new UsernameNotFoundException("user not found"+username);
        }


        USER_ROLE role= user.getRole();
        List<GrantedAuthority> authorities= new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(role.toString()));

        return new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPassword(),authorities);
    }
}
