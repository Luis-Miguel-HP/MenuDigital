import { Component } from '@angular/core';
import{XNombreService} from '../../servicios/x-nombre.service'



@Component({
  selector: 'app-nombre',
  imports: [],
  templateUrl: './nombre.component.html',
  styleUrl: './nombre.component.css'
})
export class NombreComponent {
  error = "";
   query = '';
  meal: any = null
  constructor(private xnombreApi: XNombreService){}

  // esta funciona busca
  buscar(){
    this.error = ''
    if (!this.query.trim()) return;
    this.xnombreApi.buscarPlatillo(this.query.trim())
    .subscribe({
      
    })
  }

}
