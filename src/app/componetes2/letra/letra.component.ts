import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { XLetraService } from '../../servicios/x-letra.service';

@Component({
  selector: 'app-letra',
  imports: [FormsModule],
  templateUrl: './letra.component.html',
  styleUrl: './letra.component.css'
})
export class LetraComponent {
  Letra: string = ""
  meals: any[] = []

  constructor(private letra: XLetraService){}


  buscar(){
    this.letra.obtenerLetra(this.Letra)
    .subscribe((data)=>{
      this.meals = data.meals;
      console.log(this.meals) 
 

    })
  }

}
