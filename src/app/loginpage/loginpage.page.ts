import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { RedireccionamientoService } from '../services/redireccionamiento.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
user:string = '';
password:string = '';

  constructor(private navController:NavController, private alertController:AlertController, private redireccionamiento:RedireccionamientoService) { }

  nav (data:string){
    this.redireccionamiento.redireccion(data);
  }
  ngOnInit() {
  }
  async mandarMensaje(mensaje : string,
                      titulo : string){
 const alerta = await this.alertController.create({
  header:titulo,
  message:mensaje,
  buttons:['Cerrar']
 });
 
 await alerta.present();
}
async login(){
  await this.mandarMensaje('Hola mundo!',
                          'notificación');
}

// npm install -g ionic/cli
}
