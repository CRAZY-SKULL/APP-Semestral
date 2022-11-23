import { Component, OnInit } from '@angular/core';
import { FormBuilder, 
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public router: Router) {
    this.formularioRegistro = this.fb.group({
      'correo': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required),
      'confirmacionContraseña': new FormControl("",Validators.required)
    });
   }
  ngOnInit() {
  }
  async guardar(){
    var f = this.formularioRegistro.value;
    
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'LLenar todos los datos.',
        buttons: ['Aceptar']
      });
      
      await alert.present();
      return;
      }
      
      var usuario = {
        correo: f.correo,
        password: f.password,
      }
      localStorage.setItem('usuario',JSON.stringify(usuario))
      this.router.navigate(['login']);
    }

}
