package com.slrt.jwtauthentication.institutes;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.slrt.jwtauthentication.freemarker.EmailService;
import com.slrt.jwtauthentication.freemarker.MailRequest;
import com.slrt.jwtauthentication.level0Employee.Level0;
import com.slrt.jwtauthentication.level0Employee.Level0Repository;
import com.slrt.jwtauthentication.level1Employee.Level1;
import com.slrt.jwtauthentication.level1Employee.Level1Repository;
import com.slrt.jwtauthentication.users.UsersRepository;
import com.slrt.jwtauthentication.users.Users;

import freemarker.template.TemplateException;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class InstituteController {
	
//	@Autowired
//	private instituteRepository insRepository;
//	@Autowired
//	private Level0Repository level0Repository;
//	@Autowired
//	private Level1Repository level1Repository;

//	@PostMapping("/institute")
//	public Institute saveInstitute(@RequestBody Institute institute) {
//		Level0 level0=institute.getLevel0();
//		Level1 level1=institute.getLevel1();
//		level0Repository.save(level0);
//		level1Repository.save(level1);
//		insRepository.save(institute);
//		return institute;
//	}
//	@GetMapping("/institutes")
//	public List<Institute> getAllInstitutes(){
//		return insRepository.findAll();
//	}
//	
//	@GetMapping("/institutes/{email}")
//	public Institute getInstitute(@PathVariable String email) {
//		return this.insRepository.findById(email).get();
//	}

//	@PostMapping(path="/institutes/{email}")
//	public void updateInstitute(@PathVariable String email,@RequestBody Institute institute) {
//		Institute i=this.insRepository.findById(email).get();
//		i.getInstituteName()=in
//	}
	@Autowired
	private instituteRepository instituteRepository;
	
	@Autowired
	private EmailService emailService;
	
	@Autowired
	private Level0Repository level0Repository;

	@Autowired
	private Level1Repository level1Repository;
	
	@Autowired
	private UsersRepository userRepository;
	
	@GetMapping(path="/institute")
	public List retrieveInstitutes() {
		
		return this.instituteRepository.findAll();
	}
	
	@GetMapping(path="/institute/{username}")
	public Institute retrieveAnInstitutes(@PathVariable String username) {
		
		return this.instituteRepository.findByinstituteUserName(username);
	}
	
	@PostMapping(path="/institute")
	public Institute addInstitute(@RequestBody Institute instituteInstance) {
//		Institute institute=new Institute();
		System.out.println(instituteInstance.getInstituteUserName());
		String instituteUserName=instituteInstance.getInstituteUserName();
		String email=instituteInstance.getInstituteEmail();
		String password=instituteInstance.getPassword();
		this.instituteRepository.save(instituteInstance);
//		sendEmail();
		
		//saving in user table
		Users user=new Users();
		user.setUsername(instituteUserName);
		user.setPassword(password);
		user.setFlag("institute");
		this.userRepository.save(user);
		return instituteInstance;
	}
	
	@PutMapping(path="/institutes/{username}")
	public void addInstitute(@RequestBody Institute institute,@PathVariable String username) {
		Institute i=this.instituteRepository.findByinstituteUserName(username);
		i.setAddress(institute.getAddress());
		i.setCity(institute.getCity());
		i.setInstituteEmail(institute.getInstituteEmail());
		i.setInstituteName(institute.getInstituteName());
		i.setInstituteTelephone(institute.getInstituteTelephone());
		i.setInstituteUserName(institute.getInstituteUserName());
		i.setPassword(institute.getPassword());
		i.setProvince(institute.getProvince());
		this.instituteRepository.save(i);
	}
	
	@GetMapping(path="/waiting")
	public List<Institute> retrieveWaitingInstitutes(){
		return this.instituteRepository.findByacceptance(false);
	}
	
	@GetMapping(path="/accept/{username}")
	public Institute updateAccepted(@PathVariable String username) {
		Institute i=this.instituteRepository.findByinstituteUserName(username);
		i.setAcceptance(true);
		this.instituteRepository.save(i);
		//sending mail to level0
		String name="123";
		String to=i.getInstituteEmail();
		String from="slrt@gmail.com";
		String subject="Registration confirmation and adding level0 employee";
		
		String level0username="level0"+i.getInstituteUserName();
		String level0password=givenUsingPlainJava_whenGeneratingRandomStringBounded_thenCorrect(username);
		System.out.println(level0password);
		
		//saving level0 employee to level0 table
		Level0 level0=new Level0();
		level0.setL0UserName(level0username);
		level0.setL0Password(level0password);
		this.level0Repository.save(level0);
		//-----------------------------
		
		//saving level0 Employee to user table 
		Users user=new Users();
		user.setUsername(level0username);
		user.setPassword(level0password);
		user.setFlag("level0");
		this.userRepository.save(user);
		//----------------------------
		//setting level0 forign key to institue table
		i.setLevel0(level0);
		this.instituteRepository.save(i);
		//-------------------
		sendEmailLevel0(name, to, from, subject,i,level0username,level0password);
		return i;
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
	    String password=generatedString+" : "+username;
	    return password;
	}
	public void sendEmailLevel0(String name,String to,String from,String subject,Institute i,String username,String password) {
		Map<String, Object> model=new HashMap<String, Object>();
		
		model.put("username", username);
		model.put("password", password);
		
		MailRequest mailRequest=new MailRequest(name,to,from,subject);
		
		try {
			this.emailService.sendSimpleMessage(mailRequest, model);
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
	
	@PutMapping(path="/institute/login/{username}")
	public Level0 updateLogin(@RequestBody Level0 level0,@PathVariable String username) {
		
		Level0 l0=this.level0Repository.findByl0UserName(username);
		
		Institute i=this.instituteRepository.findBylevel0(l0);
		
		
		
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
	
	@GetMapping(path="/institute/instance/level0")
	public Institute getRelevantInstiuteToLevel0(@RequestBody Level0 level0) {
		return this.instituteRepository.findBylevel0(level0);
	}
	//ok
	@PostMapping(path="/institute/instance/level1")
	public Institute getRelevantInstiuteToLevel1(@RequestBody Level1 level1) {
		Level1 l1=this.level1Repository.findByl1UserName(level1.getL1UserName());
		return this.instituteRepository.findBylevel1(l1);
	}
	
	
}
