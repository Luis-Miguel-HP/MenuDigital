import { Component } from '@angular/core';
import{XNombreService} from '../../servicios/x-nombre.service'
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-nombre',
  imports: [FormsModule],
  templateUrl: './nombre.component.html',
  styleUrl: './nombre.component.css'
})
export class NombreComponent {
   Nombre: string = ""
   meals: any[] = []
 
   constructor(private letra: XNombreService){}
 
 
   buscar(){
     this.letra.obtenerNombre(this.Nombre)
     .subscribe((data)=>{
       this.meals = data.meals;
       console.log(this.meals) 
  
 
     })
   }
}
