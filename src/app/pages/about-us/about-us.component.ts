import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsideComponent } from 'src/app/Components/aside/aside.component';
import { AuthorsComponent } from 'src/app/Components/authors/authors.component';
import { KnowMoreComponent } from 'src/app/Components/know-more/know-more.component';
import { Authors } from 'src/app/Models/authors';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  standalone: true,
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  imports: [KnowMoreComponent, AuthorsComponent, AsideComponent, RouterModule, NgFor]
})
export class AboutUsComponent {
  constructor(public service: RequestService) { }
  url: string = enviroment.home.authors
  data: Authors[] = [];

  ngOnInit(): void {
    this.service.getRequest<Authors[]>(this.url).subscribe((data) => {
      this.data = data;
    })
  }
}
