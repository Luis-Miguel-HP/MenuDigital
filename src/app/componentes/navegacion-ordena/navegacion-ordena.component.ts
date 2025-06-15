import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navegacion-ordena',
  imports: [HeaderComponent,FooterComponent,RouterLink,RouterOutlet],
  templateUrl: './navegacion-ordena.component.html',
  styleUrl: './navegacion-ordena.component.css'
})
export class NavegacionOrdenaComponent {

}
