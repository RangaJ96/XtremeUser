package com.slrt.jwtauthentication.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {
	
	@Autowired
	private AdminRepository adminRepository;

	@GetMapping(path="/admin")
	public String retrieveNotificationNo() {
		return "admin";
	}
}
