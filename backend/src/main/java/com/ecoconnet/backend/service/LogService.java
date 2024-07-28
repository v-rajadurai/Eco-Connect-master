package com.ecoconnet.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecoconnet.backend.model.LoginModel;
import com.ecoconnet.backend.repository.LogRepo;

@Service
public class LogService {
    @Autowired
    private LogRepo logrep;

    public boolean saveLogin(LoginModel log) {
        try {
            logrep.save(log);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
    public boolean autho( String email, String password) {
        LoginModel foundUser = logrep.findById(email).orElse(null);
        if (foundUser != null && foundUser.getPass().equals(password)) {
            return true; 
        }
        return false; 
    }
}
