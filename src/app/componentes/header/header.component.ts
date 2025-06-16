import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-header',
  imports: [RouterOutlet,RouterLink,FooterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
