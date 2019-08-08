package com.slrt.jwtauthentication.level1Employee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.slrt.jwtauthentication.freemarker.EmailService;
import com.slrt.jwtauthentication.freemarker.MailRequest;
import com.slrt.jwtauthentication.institutes.Institute;
import com.slrt.jwtauthentication.level2Employee.Level2;
import com.slrt.jwtauthentication.level2Employee.Level2Repository;
import com.slrt.jwtauthentication.institutes.instituteRepository;
import com.slrt.jwtauthentication.users.UsersRepository;
import com.slrt.jwtauthentication.users.Users;

import freemarker.template.TemplateException;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.mail.MessagingException;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class Level1Controller {

	private Level1 level1;
	
	private int count=0;
	
	@Autowired
	private Level1Repository level1Repository;
	@Autowired
	private instituteRepository instituteRepository;
	@Autowired
	private Level2Repository level2Repository;
	@Autowired
	private UsersRepository userRepository;
	@Autowired
	private EmailService emailService;
	
	
//	@PostMapping(path="/level1")
//	public void addLevel2(@RequestBody Level1 level1) {
//		this.level1Repository.save(level1);
//	}
	
	@GetMapping(path="/level1/{username}")
	public Level1 getLevel1Object(@PathVariable String username) {
		return this.level1Repository.findByl1UserName(username);
	}
	
	@PutMapping(path="/level1/update")
	public void updateLevel1(@RequestBody Level1 level1) {
		System.out.println(level1.getL1UserName());
		Level1 l1=this.level1Repository.findByl1UserName(level1.getL1UserName());
		l1.setL1UserEmail(level1.getL1UserEmail());
		l1.setL1FirstName(level1.getL1FirstName());
		l1.setL1LastName(level1.getL1LastName());
		l1.setL1NIC(level1.getL1NIC());
		l1.setL1Telephone(level1.getL1Telephone());
		l1.setL1Address(level1.getL1Address());
		this.level1Repository.save(l1);
		System.out.println(level1);
	}
	
	@PutMapping(path="/level1/{username}")
	public Level1 updateLogin(@RequestBody Level1 level1,@PathVariable String username) {
//		System.out.println(level1+" "+username);
//		
//		return level1;
//		Level1 l1=this.level1Repository.findById(username).get();
//		
//		Institute i=this.instituteRepository.findBylevel1(l1);
//		
//		
//		
//		Level1 l1New=new Level1();
//		l1New.setL1UserName(level1.getL1UserName());
//		l1New.setL1UserEmail(l1.getL1UserEmail());
//		l1New.setL1FirstName(l1.getL1FirstName());
//		l1New.setL1LastName(l1.getL1LastName());
//		l1New.setL1NIC(l1.getL1NIC());
//		l1New.setL1Telephone(l1.getL1Telephone());
//		l1New.setL1Address(l1.getL1Address());
//		l1New.setL1Password(level1.getL1Password());
//		this.level1Repository.save(l1New);
//		i.setLevel1(l1New);
//		
//		this.level1Repository.delete(l1);
//		
//		
//		
//		System.out.println(l1New);
//		return l1New;
		
//		return level1;
		
		Level1 l1=this.level1Repository.findByl1UserName(username);
//		l1.setL1UserEmail(level1.getL1UserEmail());
//		l1.setL1FirstName(level1.getL1FirstName());
//		l1.setL1LastName(level1.getL1LastName());
//		l1.setL1NIC(level1.getL1NIC());
//		l1.setL1Telephone(level1.getL1Telephone());
//		l1.setL1Address(level1.getL1Address());
		l1.setL1UserName(level1.getL1UserName());
		l1.setL1Password(level1.getL1Password());
		this.level1Repository.save(l1);
		
		return l1;
	}
	
	
	@PostMapping(path="/level1/{username}/level2")
	public Level2 addLevel1(@RequestBody Level2 level2,@PathVariable String username) {

		String name="123";
		String to=level2.getL2UserEmail();
		String from="slrt@gmail.com";
		String subject="Registration confirmation and adding level2 employee";
		
		String level2username="level2"+to;
		String level2password=givenUsingPlainJava_whenGeneratingRandomStringBounded_thenCorrect(username);
		
		Level2 l2=new Level2();
		l2.setL2UserName(level2username);
		l2.setL2UserEmail(level2.getL2UserEmail());
		l2.setL2Password(level2password);
		this.level2Repository.save(l2);
		
		Level1 l1=this.level1Repository.findByl1UserName(username);
		List<Level2> level2List=new ArrayList<Level2>();
		level2List=l1.getLevel2();
		level2List.add(l2);
		this.level1Repository.save(l1);
		
//		----------------------need to change-------------
		Institute i=new Institute();
		i=this.instituteRepository.findBylevel1(l1);
		System.out.println(i);
		List<Level2> level1List=new ArrayList<Level2>();
		level1List=i.getLevel2();
		level1List.add(l2);
		i.setLevel2(level1List);
		this.instituteRepository.save(i);
		count++;
	
		Users user=new Users();
		user.setUsername(level2username);
		user.setPassword(level2password);
		user.setFlag("level2");
		this.userRepository.save(user);
		
		sendEmailLevel2(name, to, from, subject,i,level2username,level2password);
		
		return level2;
	}
	public String givenUsingPlainJava_whenGeneratingRandomStringBounded_thenCorrect(String username) {
		  
	    int leftLimit = 97; // letter 'a'
	    int rightLimit = 122; // letter 'z'
	    int targetStringLength = 10;
	    Random random = new Random();
	    StringBuilder buffer = new StringBuilder(targetStringLength);
	    for (int i = 0; i < targetStringLength; i++) {
	        int randomLimitedInt = leftLimit + (int) 
	          (random.nextFloat() * (rightLimit - leftLimit + 1));
	        buffer.append((char) randomLimitedInt);
	    }
	    String generatedString = buffer.toString();
	    String password=generatedString+"ABy"+username;
	    return password;
	}
	public void sendEmailLevel2(String name,String to,String from,String subject,Institute i,String username,String password) {
		Map<String, Object> model=new HashMap<String, Object>();
		
		model.put("username", username);
		model.put("password", password);
		
		MailRequest mailRequest=new MailRequest(name,to,from,subject);
		
		try {
			this.emailService.sendSimpleMessageTLevel1(mailRequest, model);
		} catch (MessagingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (TemplateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	

//	@GetMapping(path="/level1/{username}")
//	public List<Level1> display(@PathVariable String username) {
////		return this.level1Repository.findById(username).get();
//		return this.level1Repository.findAll();
//	}
}
