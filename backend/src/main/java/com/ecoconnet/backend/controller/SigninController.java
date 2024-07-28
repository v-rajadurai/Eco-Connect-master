package com.ecoconnet.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecoconnet.backend.model.LoginModel;
import com.ecoconnet.backend.service.SigninService;
 
@RestController
public class SigninController {
     @Autowired
    private SigninService signin;

    @GetMapping("/auth")
    public boolean autho(@RequestParam String email,@RequestParam String password )
    {
        return signin.autho(email,password);
    } 
}
