package com.ecoconnet.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecoconnet.backend.model.LoginModel;
import com.ecoconnet.backend.repository.LogRepo;

@Service
public class SigninService {
    @Autowired 
    private LogRepo rep;
    public boolean autho( String email, String password) {
        LoginModel foundUser = rep.findById(email).orElse(null);
        if (foundUser != null && foundUser.getPass().equals(password)) {
            return true; 
        }
        return false; 
    }
     
   





}


