import { Component, OnInit } from '@angular/core';
@Injectable({
  providentIn:'root'
})
@Component({
  selector: 'app-loginstate',
  templateUrl: './loginstate.component.html',
  styleUrls: ['./loginstate.component.scss'],
})
export class LoginstateComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
async loginverification(user:string, pass:string){
    try{
       if (user == '' || pass == ''){
    return 'Hay algun campo vacio';
      }
    if(!this.userChecker(user) && !this.passChecker(pass)){
      return 'usuario o password no validos';
    }
  }catch(e){
    return 'Error inesperado! intentelo mas tarde';
  }
  await this.confirmlogin(user,pass);
}
async confirmlogin(user:string, pass:string){

}
userChecker(user:string){
  return true;
}
}