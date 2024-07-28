package com.ecoconnet.backend.controller;

import java.util.List;
import java.util.Scanner;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.ecoconnet.backend.service.PostRagService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ecoconnet.backend.model.PostRagModel;
import com.ecoconnet.backend.repository.PostRagRepo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/ecoconnect")
public class PostRagController {
    @Autowired
    private PostRagService ragService;

    @PostMapping("/postragger/post")
    public PostRagModel getRagsPost(@RequestBody PostRagModel postRagModel) {
        return ragService.postragservice(postRagModel);
    }   
    @GetMapping("/getRags")
    public List<PostRagModel> getRagsDetails() {
        return ragService.getRags();
    }   

    @DeleteMapping("/deleteRag/{id}")
    public void deletePostRagModel(@PathVariable int id) {
        ragService.deletePost(id);
    }
}
