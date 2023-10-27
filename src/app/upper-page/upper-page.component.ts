import {Component} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-upper-page',
  templateUrl: './upper-page.component.html',
  styleUrls: ['./upper-page.component.css']
})
export class UpperPageComponent {

  text !: string;
  emailTx !: string;
  nome!: string;
  oggetto !: string;
  form !: UntypedFormGroup;


  constructor(public fb: UntypedFormBuilder, public email: EmailService) {
    this.form = fb.group({
      'text': ['', Validators.required],
      'emailTx': ['',Validators.required],
      'nome': ['',Validators.required],
      'oggetto':['',Validators.required]
    });
  }


  ngOnInit() {

  }

  alert() {
    Swal.fire({
      title: 'Conferma il tuo messaggio?',
      icon: "info",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Si',
      confirmButtonColor: "#52bdcb",
      denyButtonText: 'No',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        
        this.sdEmail();
        this.form.reset();
        Swal.fire({title: 'Email Inviata!', icon: 'success', confirmButtonText: "Ok", confirmButtonColor: "#52bdcb"})
      } else if (result.isDenied) {
        Swal.fire({
          title: 'Operazione annullata!',
          icon: 'error',
          confirmButtonText: "Ok",
          confirmButtonColor: "#52bdcb"
        })
      }
    })
  }

  
    sdEmail(){
      this.text = this.form.controls['text'].value;
      this.emailTx= this.form.controls['emailTx'].value;
      this.oggetto= this.form.controls['oggetto'].value;
      this.email.sendEmail(this.emailTx,this.oggetto,this.text).subscribe(
        data=>{console.log("Email inviata correttamente!")
        console.log(this.emailTx);
        console.log(this.oggetto);
        },
        err=>{console.log(err)}
        );
    }


}
