import { Component } from '@angular/core';
import { AleatorioService } from '../../servicios/aleatorio.service';
import { ignoreElements } from 'rxjs';

@Component({
  selector: 'app-aleatorio',
  imports: [],
  templateUrl: './aleatorio.component.html',
  styleUrl: './aleatorio.component.css'
})
export class AleatorioComponent {
  mealData : any;


  
  constructor(private aleatorio: AleatorioService){}
  
  obtenerPlatillo(){
    this.aleatorio.conseguirAleatorio()
    .subscribe((data)=>{
      this.mealData = data
      console.log(this.mealData) 
     
  

    })
  

  }
  }
