package com.EatonClick.EatonClick.model;

import com.EatonClick.EatonClick.dto.RestaurantDto;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    public void setId(Long id) {
        this.id = id;
    }

    public void setAddresses(List<Address> addresses) {
        this.addresses = addresses;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }

    public void setFavorites(List<RestaurantDto> favorites) {
        this.favorites = favorites;
    }

    public void setRole(USER_ROLE role) {
        this.role = role;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public List<Address> getAddresses() {
        return addresses;
    }

    public String getFullname() {
        return fullname;
    }

    public List<RestaurantDto> getFavorites() {
        return favorites;
    }

    public USER_ROLE getRole() {
        return role;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    private String fullname;
    private String password;
    private String email;



    private  USER_ROLE role=   USER_ROLE.ROLE_CUSTOMER; //enum


    @JsonIgnore  // Ignore orders when the user entity is called
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "customer")  // List of orders made by user
    private List<Order> orders = new ArrayList<>();


    @ElementCollection
    private List<RestaurantDto> favorites = new ArrayList<>(); //user stores fav restaurants

    @OneToMany(cascade=CascadeType.ALL,orphanRemoval = true)
private List<Address> addresses = new ArrayList<>(); // if user is deleted all addresses are deleted
}
