import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { NosotrosComponent } from '../nosotros/nosotros.component';

@Component({
  selector: 'app-principal',
  imports: [RouterLink,HeaderComponent,FooterComponent,NosotrosComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
