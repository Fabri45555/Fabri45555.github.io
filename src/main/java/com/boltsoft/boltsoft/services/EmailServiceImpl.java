package com.boltsoft.boltsoft.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class EmailServiceImpl{

  @Autowired
  private JavaMailSender emailSender;

  public void sendSimpleMessage(String from, String subject,String text){
    SimpleMailMessage message = new SimpleMailMessage();
    message.setFrom(from);
    message.setTo("boltsofttm@gmail.com");
    message.setSubject(subject);
    message.setText(text);
    emailSender.send(message);
  }
}
