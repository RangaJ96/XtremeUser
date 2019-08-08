package com.slrt.jwtauthentication.freemarker;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import freemarker.template.TemplateException;

@RestController
public class EmailController {

	@Autowired
	private EmailService service;
	
	@PostMapping(path="/email")
	public MailResponse sendEmail(@RequestBody MailRequest request) throws MessagingException, IOException, TemplateException {
		Map<String, Object> model=new HashMap<String, Object>();
		model.put("Name", "John");
		model.put("Location", "Bangalore,India");
		return service.sendSimpleMessage(request, model);
	} 
}
