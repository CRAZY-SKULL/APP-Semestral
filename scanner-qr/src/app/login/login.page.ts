import { Component, OnInit } from '@angular/core';
import { FormBuilder, 
            FormGroup,
            FormControl,
            Validators
 } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formularioLogin = this.fb.group({
      'email': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
  }

}
