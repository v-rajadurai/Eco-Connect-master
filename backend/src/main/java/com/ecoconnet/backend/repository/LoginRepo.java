package com.ecoconnet.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecoconnet.backend.model.Login;


@Repository
public interface LoginRepo extends  JpaRepository<Login,Long>{

    
    
}
