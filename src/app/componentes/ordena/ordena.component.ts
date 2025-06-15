import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NombreComponent } from '../../componetes2/nombre/nombre.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavegacionOrdenaComponent } from '../navegacion-ordena/navegacion-ordena.component';

@Component({
  selector: 'app-ordena',
  imports: [HeaderComponent,FooterComponent,NombreComponent,RouterOutlet, RouterLink,NavegacionOrdenaComponent],
  templateUrl: './ordena.component.html',
  styleUrl: './ordena.component.css'
})
export class OrdenaComponent {

}
