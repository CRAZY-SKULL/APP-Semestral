import { Component, OnInit } from '@angular/core';
import { FormBuilder, 
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder) {
        this.formularioRegistro = this.fb.group({
      'correo': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required),
      'confirmacionContraseña': new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
  }

}
