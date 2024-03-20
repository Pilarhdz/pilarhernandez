import { Component, OnInt } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-loginpage',
  templateUrl:'./loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class loginpagePage implements OnInt {
  user:string ="";
  pass:string ="";
    constructor(private toastContoller: ToastController) { }

    ngOnInt() {
    }
    //temporal
    //sincrona
    mostrarValores(){
      console.log(this.user);
      console.log(this.pass);
    }
    //asincrona
    async mostrarToast(){
      const toast = await this.toastContoller,create({
        message: this.user + this.pass,
        duration:2000,
        position:'middle',
      })
      await toast.present();
    }
}