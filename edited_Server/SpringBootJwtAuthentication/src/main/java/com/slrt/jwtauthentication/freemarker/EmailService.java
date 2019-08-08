package com.slrt.jwtauthentication.freemarker;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import freemarker.core.Configurable;
import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;

@Service
public class EmailService {

	@Autowired
    private JavaMailSender emailSender;

    @Autowired
    private Configuration freemarkerConfig;

    public MailResponse sendSimpleMessage(MailRequest request,Map<String, Object> model) throws MessagingException, IOException, TemplateException {
        MailResponse response=new MailResponse();
    	MimeMessage message = emailSender.createMimeMessage();
        try {
        	MimeMessageHelper helper = new MimeMessageHelper(message,
                    MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                    StandardCharsets.UTF_8.name());
//
//            helper.addAttachment("logo.jpg", new ClassPathResource("memorynotfound-logo.jpg"));

            Template t = freemarkerConfig.getTemplate("email-template.ftl");
            String html = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);

            helper.setTo(request.getTo());
            helper.setText(html, true);
            helper.setSubject(request.getSubject());
            helper.setFrom(request.getFrom());

            emailSender.send(message);
            response.setMessage("mail send to : "+request.getTo());
            response.setStatus(Boolean.TRUE);
        }catch(MessagingException| IOException| TemplateException e){
        	response.setMessage("mail send failure : "+e.getMessage());
            response.setStatus(Boolean.FALSE);
        }
        return response;
    }
    
    public MailResponse sendSimpleMessageTLevel1(MailRequest request,Map<String, Object> model) throws MessagingException, IOException, TemplateException {
        MailResponse response=new MailResponse();
    	MimeMessage message = emailSender.createMimeMessage();
        try {
        	MimeMessageHelper helper = new MimeMessageHelper(message,
                    MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                    StandardCharsets.UTF_8.name());
//
//            helper.addAttachment("logo.jpg", new ClassPathResource("memorynotfound-logo.jpg"));

            Template t = freemarkerConfig.getTemplate("email-templateL1.ftl");
            String html = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);

            helper.setTo(request.getTo());
            helper.setText(html, true);
            helper.setSubject(request.getSubject());
            helper.setFrom(request.getFrom());

            emailSender.send(message);
            response.setMessage("mail send to : "+request.getTo());
            response.setStatus(Boolean.TRUE);
        }catch(MessagingException| IOException| TemplateException e){
        	response.setMessage("mail send failure : "+e.getMessage());
            response.setStatus(Boolean.FALSE);
        }
        return response;
    }
}
