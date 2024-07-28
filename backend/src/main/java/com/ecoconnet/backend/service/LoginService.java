package com.ecoconnet.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.stereotype.Service;

import com.ecoconnet.backend.model.Login;
import com.ecoconnet.backend.repository.LoginRepo;

@Service
public class LoginService {
    @Autowired
    private LoginRepo loginRepo;
    public boolean saveLogin(Login login)
    {
        try{
            loginRepo.save(login);
            return true;
        }
        catch(Exception e)
        {
            return false;
        }
        
    }
    public List<Login> getLoginAll()
    {
        return loginRepo.findAll();
    }
}
