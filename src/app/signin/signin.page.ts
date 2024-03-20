import { Component, OnInit } from '@angular/core';
import { RedireccionamientoService } from '../services/redireccionamiento.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  p1:boolean = true;
  p: boolean = true;
  p2:boolean = true;
  mensaje:string = '';
  
  
  constructor( private redireccionamiento:RedireccionamientoService ) { }

  nav (data:string){
    this.redireccionamiento.redireccion(data);
  }
  ngOnInit() {
  }
  togglePass(letra:string){
    if(letra == 'a'){
      this.p1 = !this.p1;
    }
    if(letra == 'b'){
      this.p2 = !this.p2;
    }

  } 
}
