package com.ecoconnet.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecoconnet.backend.model.Login;

import com.ecoconnet.backend.service.LoginService;
@CrossOrigin(origins = "http://localhost:5173/")
@RestController
@RequestMapping("/ecoconnect")
public class LoginController {
   
    
    @Autowired
    private LoginService loginService;

    @PostMapping("/login/post")
    public boolean postMethodName(@RequestBody Login login) {
        

        return loginService.saveLogin(login);
    }

    @GetMapping("/login")
    public List<Login> getRagsDetails() {
        return loginService.getLoginAll();
    }   
}
