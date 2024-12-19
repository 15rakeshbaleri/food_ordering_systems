package com.EatonClick.EatonClick.response;

import com.EatonClick.EatonClick.model.USER_ROLE;
import com.EatonClick.EatonClick.model.User;
import lombok.Data;

@Data
public class AuthResponse {

    private String jwt;
    private String message;
    private USER_ROLE role;

}
