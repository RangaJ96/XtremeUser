package com.slrt.jwtauthentication.level0Employee;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.slrt.jwtauthentication.freemarker.EmailService;
import com.slrt.jwtauthentication.freemarker.MailRequest;
import com.slrt.jwtauthentication.institutes.Institute;
import com.slrt.jwtauthentication.institutes.instituteRepository;
import com.slrt.jwtauthentication.level1Employee.Level1;
import com.slrt.jwtauthentication.level1Employee.Level1Repository;
import com.slrt.jwtauthentication.users.UsersRepository;
import com.slrt.jwtauthentication.users.Users;

import freemarker.template.TemplateException;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class Level0Controller {

	
	private Level0 level0;
	@Autowired
	private Level0Repository level0Repository;
	@Autowired
	private instituteRepository InstituteRepository;
	@Autowired
	private EmailService emailService;
	@Autowired
	private UsersRepository userRepository;
	@Autowired
	private Level1Repository level1Repository;

//	@GetMapping(path="/level0")
//	public Level0 hello() {
//		return new Level0();
//	}
	
	@GetMapping(path="/level0/{username}")
	public Level0 getLevel0Object(@PathVariable String username) {
		return this.level0Repository.findByl0UserName(username);
	}
	
	
	@PutMapping(path="/level0/{username}")
	public Level0 updateLogin(@RequestBody Level0 level0,@PathVariable String username) {
		
		Level0 l0=this.level0Repository.findByl0UserName(username);
		
		Institute i=this.InstituteRepository.findBylevel0(l0);
		
		
		
		Level0 l0New=new Level0();
		l0New.setL0UserName(level0.getL0UserName());
		l0New.setL0UserEmail(l0.getL0UserEmail());
		l0New.setL0FirstName(l0.getL0FirstName());
		l0New.setL0LastName(l0.getL0LastName());
		l0New.setL0NIC(l0.getL0NIC());
		l0New.setL0Telephone(l0.getL0Telephone());
		l0New.setL0Address(l0.getL0Address());
		l0New.setL0Password(level0.getL0Password());
		this.level0Repository.save(l0New);
		i.setLevel0(l0New);
		
		this.level0Repository.delete(l0);
		
		
		
		System.out.println(l0New);
		return l0New;
		
//		Level0 l0=this.level0Repository.findById(username).get();
//		this.level0Repository.delete(l0);
//		l0.setL0UserName(username);
//		this.level0Repository.save(l0)
//		l0.setL0UserName(level0.getL0UserName());
//		l0.setL0Password(level0.getL0Password());
//		
//		this.level0Repository.save(l0);
//		return l0;
	}
	@PutMapping(path="/level0/update")
	public void updateLevel0(@RequestBody Level0 level0) {
		Level0 l0=this.level0Repository.findByl0UserName(level0.getL0UserName());
		l0.setL0UserEmail(level0.getL0UserEmail());
		l0.setL0FirstName(level0.getL0FirstName());
		l0.setL0LastName(level0.getL0LastName());
		l0.setL0NIC(level0.getL0NIC());
		l0.setL0Telephone(level0.getL0Telephone());
		l0.setL0Address(level0.getL0Address());
		this.level0Repository.save(l0);
	}
	
	@PutMapping(path="/level0/{username}/level1")
	public Level1 addLevel1(@RequestBody Level1 level1,@PathVariable String username) {

		String name="123";
		String to=level1.getL1UserEmail();
		String from="slrt@gmail.com";
		String subject="Registration confirmation and adding level1 employee";
		
		String level1username="level1"+to;
		String level1password=givenUsingPlainJava_whenGeneratingRandomStringBounded_thenCorrect(username);
		
		Level1 l1=new Level1();
		l1.setL1UserName(level1username);
		l1.setL1UserEmail(level1.getL1UserEmail());
		l1.setL1Password(level1password);
		this.level1Repository.save(l1);
		
		Level0 l0=this.level0Repository.findByl0UserName(username);
		l0.setLevel1(l1);
		this.level0Repository.save(l0);
		
		Institute i=new Institute();
		i=this.InstituteRepository.findBylevel0(l0);
		System.out.println(i);
		i.setLevel1(l1);
		this.InstituteRepository.save(i);
		
				
		Users user=new Users();
		user.setUsername(level1username);
		user.setPassword(level1password);
		user.setFlag("level1");
		this.userRepository.save(user);
		
		sendEmailLevel0(name, to, from, subject,i,level1username,level1password);
		
		return level1;
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
	public void sendEmailLevel0(String name,String to,String from,String subject,Institute i,String username,String password) {
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

}
