package com.boltsoft.boltsoft.controllers;



import com.boltsoft.boltsoft.services.EmailServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/email")
public class EmailController {

  private final EmailServiceImpl emailService;

  public EmailController(EmailServiceImpl emailService){
    this.emailService=emailService;
  }


  @PostMapping("/send/{email}/{sub}/{text}")
  public ResponseEntity<?> sendEmail(@PathVariable("email") String from,@PathVariable("sub") String sub, @PathVariable("text") String text){
    emailService.sendSimpleMessage(from,sub,from+"\n\n"+text);
    return new ResponseEntity<>(HttpStatus.CREATED);
  }


}
