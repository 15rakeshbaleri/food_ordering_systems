package com.EatonClick.EatonClick.service;

import com.EatonClick.EatonClick.config.JwtProvider;
import com.EatonClick.EatonClick.model.User;
import com.EatonClick.EatonClick.repository.User_repo;
import lombok.AllArgsConstructor;
import org.apache.tomcat.websocket.server.WsWriteTimeout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


//i dentifing user based on jwt
@Service
public class Userserviceimpl implements Userservice {


    @Autowired
    private User_repo userRepo;
    @Autowired
    private JwtProvider jwtProvider;

    @Override
    public User findUserByJwttocken(String jwt) throws Exception {
        String email=jwtProvider.getEmailFromToken(jwt);
        User user=findUserByEmail(email);
        return user;

    }

    @Override
    public User findUserByEmail(String email) throws Exception {
    User user= userRepo.findByEmail(email);
    if(user==null){
        throw new Exception("user not found");
    }
    return user;
    }
}
