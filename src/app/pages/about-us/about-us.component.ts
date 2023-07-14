import { Component } from '@angular/core';
import { Authors } from 'src/app/Models/authors';
import { Knowmore } from 'src/app/Models/know-more';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  constructor(public service: RequestService){}
  url: string = enviroment.home.authors
  data: Authors[] = [];

  ngOnInit(): void {
    this.service.getRequest<Authors[]>(this.url).subscribe((data) => {
      this.data = data;
    })
  }
}
