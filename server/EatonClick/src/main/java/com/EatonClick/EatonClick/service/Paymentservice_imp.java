package com.EatonClick.EatonClick.service;

import com.EatonClick.EatonClick.model.Order;
import com.EatonClick.EatonClick.response.Payment_response;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class Paymentservice_imp implements Payment_service {

    @Value("${stripe.api.key}")
    private String stripeapikey;

    @Override
    public Payment_response create_payment_link(Order order) throws StripeException {

        Stripe.apiKey = stripeapikey;
        SessionCreateParams params = SessionCreateParams.builder().addPaymentMethodType(
                SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("http://localhost:5173/payment/success/"+order.getId())
                .setCancelUrl("http://localhost:5173/payment/failure")
                .addLineItem(SessionCreateParams.LineItem.builder()
                        .setQuantity(1L).setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                                .setCurrency("usd")
                                .setUnitAmount((long)order.getTotalPrice()*100)
                                .setProductData(SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                        .setName("EatonClick")
                                        .build())
                                .build())
                        .build())
                .build();


        Session session= Session.create(params);
        Payment_response response = new Payment_response();
        response.setPaymenturl(session.getUrl());


        return response;
    }
}
