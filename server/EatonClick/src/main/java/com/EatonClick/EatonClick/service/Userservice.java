package com.EatonClick.EatonClick.service;

import com.EatonClick.EatonClick.model.User;

public interface Userservice {

    public User findUserByJwttocken(String jwt)throws Exception;
    public User findUserByEmail(String email)throws Exception;
}
