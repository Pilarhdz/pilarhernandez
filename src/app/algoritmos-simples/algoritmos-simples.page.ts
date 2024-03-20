import { Component, OnInit } from '@angular/core';
import * as PlotlyJS  from 'plotly.js-dist-min';
import {PlotlyModule} from 'angular-plotly.js';
PlotlyModule.plotlyjs = PlotlyJS;
@Component({
  selector: 'app-algoritmos-simples',
  templateUrl: './algoritmos-simples.page.html',
  styleUrls: ['./algoritmos-simples.page.scss'],
})
  export class AlgoritmosSimplesPage implements OnInit {
   
  public grafica = {
    data: [{
      x:[1,2,3],y:[5,6,7],type:'bar'
    }],
    layout:{title: '', width:800, height:800 }
  };
  
  constructor() { }

  ngOnInit() {
    this.poblar();
  }
  poblar(){
    this.poblarX(100);
    this.poblarY(100);
  }
  poblarX(num:number){
    for(let i = 0; i < num; i++){
      this.grafica.data[0].x[i] = i;  //el . es para apuntar a un elmento dentro de una llave
    }

  }
  poblarY(num:number){
    for(let i = 0; i < num; i++){
      this.grafica.data[0].y[i] = Math.floor(Math.random()* num) + 1;
    }

  }

}
