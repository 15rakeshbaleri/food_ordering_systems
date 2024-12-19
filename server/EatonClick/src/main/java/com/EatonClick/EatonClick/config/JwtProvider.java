package com.EatonClick.EatonClick.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import javax.xml.crypto.Data;
import java.util.*;

@Service
public class JwtProvider  {
    private SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET.getBytes());
    public String generateToken(Authentication auth) {
        Collection<? extends GrantedAuthority> authorities = auth.getAuthorities();
        String roles = populateAuthorities(authorities);
        String jwt = Jwts.builder()
                .setIssuedAt(new Date())  // Fix: Use 'new Date()' correctly
                .setExpiration(new Date(new Date().getTime() + 86400000)) // Fix: Correct 'Data' to 'Date'
                .claim("email", auth.getName())  // Add email claim
                .claim("authorities", roles)     // Add authorities claim
                .signWith(key) // Specify the signing algorithm
                .compact();

        return jwt;
    }

    private String populateAuthorities(Collection<? extends GrantedAuthority> authorities) {
        Set<String> auths = new HashSet<>();
        for(GrantedAuthority authority : authorities) {
            auths.add(authority.getAuthority());
        }
        return String.join(",", auths);
    }

    public String getEmailFromToken(String jwttoken) {
    jwttoken=jwttoken.substring(7);
        Claims claims= Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwttoken).getBody();
        String email=String .valueOf(claims.get("email"));

           return email;
    }
}
