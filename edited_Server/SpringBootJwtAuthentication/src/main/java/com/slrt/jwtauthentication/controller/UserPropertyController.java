package com.slrt.jwtauthentication.controller;

import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.slrt.jwtauthentication.model.UserPropaties;
import com.slrt.jwtauthentication.repository.UserPropertiesRepository;
import com.slrt.jwtauthentication.security.services.UserPropertiesService;





@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserPropertyController {
	
	
	
	@Autowired
	UserPropertiesService service;	
	/*
	 * @Autowired UserPropertiesService service; public void saveUser(@RequestBody
	 * UserPropaties userDTO){
	 * 
	 * service.saveUserPro(userDTO); }
	 * 
	 */
	@GetMapping("/user2/{username}")
	@PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public UserPropaties findById(@PathVariable String username){
        return service.findById(username);
    }
}


