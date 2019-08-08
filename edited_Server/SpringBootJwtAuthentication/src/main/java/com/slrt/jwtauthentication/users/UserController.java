package com.slrt.jwtauthentication.users;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class UserController {
	
	@Autowired
	private UsersRepository userRepository;

//	@GetMapping(path="/users")
//	public List<Users> retrieveAllUsers(){
//		return userRepository.findAll();
//	}
//	
//	@GetMapping(path="/users/{email}")
//	public Users retrieveAUser(@PathVariable String email){
//		return userRepository.findById(email).get();
//		
//	}
//	
//	@GetMapping(path="/users/validade/{email}/{password}")
//	public Users validadeUser(@PathVariable String email,@PathVariable String password) {
//		Users user=userRepository.findById(email).get();
//		
//		if(user.getEmail().equals(email) && user.getPassword().equals(password)) {
//			return user;
//		}else {
//			return null;
//		}
//		
//	}
	
//	@PostMapping(path="/users")
//	public void addUser(@RequestBody Users user){
//		userRepository.save(user);
//	}
//	
//	@PutMapping(path="/users/{email}")
//	public void upadateUser(@RequestBody Users user,@PathVariable String email){
//		userRepository.save(user);
//	}
//	
//	@DeleteMapping(path="/users/{email}")
//	public void deleteUser(@PathVariable String email){
//		userRepository.deleteById(email);
//	}
	
	@GetMapping(path="/users/{username}")
	public Users checkRegistered(@PathVariable String username) {
		Users user=this.userRepository.findByusername(username);
		if(user!=null) {
			return user;
		}
		return null;
	}
	
}
