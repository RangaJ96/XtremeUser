package com.slrt.jwtauthentication.level2Employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.slrt.jwtauthentication.level1Employee.Level1;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class Level2Controller {

	@Autowired
	private Level2Repository level2Repository;
	
	@PutMapping(path="/level2/{username}")
	public Level2 addLevel2(@RequestBody Level2 level2,@PathVariable String username) {
		Level2 l2=this.level2Repository.findByl2UserName(username);
		l2.setL2Address(level2.getL2Address());
		l2.setL2FirstName(level2.getL2FirstName());
		l2.setL2LastName(level2.getL2LastName());
		l2.setL2NIC(level2.getL2NIC());
		l2.setL2Telephone(level2.getL2Telephone());
		l2.setL2UserEmail(level2.getL2UserEmail());
		this.level2Repository.save(level2);
		return l2;
	}
	
	@PutMapping(path="/level2/update")
	public void updateLevel2(@RequestBody Level2 level2) {
		System.out.println(level2.getL2UserName());
		Level2 l2=this.level2Repository.findByl2UserName(level2.getL2UserName());
		l2.setL2UserEmail(level2.getL2UserEmail());
		l2.setL2FirstName(level2.getL2FirstName());
		l2.setL2LastName(level2.getL2LastName());
		l2.setL2NIC(level2.getL2NIC());
		l2.setL2Telephone(level2.getL2Telephone());
		l2.setL2Address(level2.getL2Address());
		this.level2Repository.save(l2);
		System.out.println(level2);
	}
	
//	@PutMapping(path="/level2/{username}")
//	public Level2 updateLogin(@RequestBody Level2 level2,@PathVariable String username) {
//		
//		Level2 l2=this.level2Repository.findByl2UserName(username);
////		
////		Institute i=this.InstituteRepository.findBylevel0(l0);
////		
////		
//		
//		Level2 l2New=new Level2();
//		l2New.setL2UserName(level2.getL2UserName());
//		l2New.setL2UserEmail(l2.getL2UserEmail());
//		l2New.setL2FirstName(l2.getL2FirstName());
//		l2New.setL2LastName(l2.getL2LastName());
//		l2New.setL2NIC(l2.getL2NIC());
//		l2New.setL2Telephone(l2.getL2Telephone());
//		l2New.setL2Address(l2.getL2Address());
//		l2New.setL2Password(level2.getL2Password());
//		this.level2Repository.save(l2New);
////		i.setLevel0(l0New);
//		
//		this.level2Repository.delete(l2);
//		
//		
//		
//		System.out.println(l2New);
//		return l2New;
//		
////		Level0 l0=this.level0Repository.findById(username).get();
////		this.level0Repository.delete(l0);
////		l0.setL0UserName(username);
////		this.level0Repository.save(l0)
////		l0.setL0UserName(level0.getL0UserName());
////		l0.setL0Password(level0.getL0Password());
////		
////		this.level0Repository.save(l0);
////		return l0;
//	}
}
