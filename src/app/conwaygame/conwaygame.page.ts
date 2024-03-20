import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conwaygame',
  templateUrl: './conwaygame.page.html',
  styleUrls: ['./conwaygame.page.scss'],
})
export class ConwaygamePage implements OnInit {
  tablero:any [][] = [] ;
  siguienteTablero:any [][] = [];
  largo:number = 60;
  alto:number = 60;
  constructor() { }

  ngOnInit() {
    this.poblar();
    this.iterar();
  }
  iterar(){
    this.poblar();
    setInterval(()=>{
      this.contarVecinos();
        this.actualizarEstado();
    }, 50);
  }

  poblar(){
    for(let i = 0; i < this.alto; i++){
      this.tablero[i] = [] ;
      for(let j = 0; j < this.largo; j++){
        this.tablero [i][j]= Math.floor(Math.random()* 2);
      }
    }
  }
  copiarTablero(arregloInput:number[][]):number[][]{
    let copia: number [][]=[];
    for(let i = 0; i < this.alto; i++){
      copia[i]=[];
      for(let j = 0; j  < this.largo; j++){
        copia[i][j] = arregloInput[i][j];
      }
    }
    return copia;
  }
  contar(a:number, b:number):number{
    let vecinos = 0;
    for(let i = -1; i < 2;i++){
      for(let j = -1; j < 2; j++){
        let x = (a + i + this.largo)% this.largo;
        let y = (b + j + this.alto) % this.alto;
        vecinos+= this.tablero[x][y];
      }
    }vecinos-=this.tablero[a][b];
    return vecinos;
  }
  actualizarEstado(){
    this.tablero = this.copiarTablero(this.siguienteTablero);
  }
  contarVecinos(){
    this.siguienteTablero=this.copiarTablero(this.tablero);
    for(let i =0; i <this.alto; i++){
      for(let j = 0; j < this.largo; j++){
        let numVecinos = this.contar(i,j);
        if(this.tablero[i][j]== 0 && numVecinos == 3){
          this.siguienteTablero[i][j]= 1;
        }else if(this.tablero[i][j]== 1 && (numVecinos < 2 || numVecinos > 3)){
          this.siguienteTablero[i][j] = 0;
        }
      }
    }
  }
  
}