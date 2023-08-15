import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from 'src/app/Components/footer/footer.component';
import { HeaderComponent } from 'src/app/Components/header/header.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet]
})
export class LayoutComponent {

}
