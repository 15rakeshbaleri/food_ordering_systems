package com.EatonClick.EatonClick.service;

import com.EatonClick.EatonClick.model.Order;
import com.EatonClick.EatonClick.response.Payment_response;
import com.stripe.exception.StripeException;
import org.springframework.stereotype.Service;

public interface Payment_service {

    public Payment_response create_payment_link(Order order) throws StripeException;

}
