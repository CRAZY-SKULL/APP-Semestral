import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController, public router:Router){
    this.formularioLogin = this.fb.group({
      'email': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
  }
  async ingresar(){
    var f =this.formularioLogin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if(usuario.correo == f.correo && usuario.password == f.password){
      console.log('Ingresado');
      this.router.navigate(['Escaner']);
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'los datos ingresados no son correctos',
        buttons: ['Aceptar']
      });
      await alert.present();
    }
  }
};
