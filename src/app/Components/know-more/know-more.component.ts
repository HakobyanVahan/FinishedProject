import { Component, Input, OnInit } from '@angular/core';
import { Knowmore } from 'src/app/Models/know-more';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-know-more',
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.css']
})
export class KnowMoreComponent implements OnInit{
  constructor(public service: RequestService){}

  url: string = enviroment.aboutUs.knowMore;
  data: Knowmore[] = [];

  ngOnInit(): void {
    this.service.getRequest<Knowmore[]>(this.url).subscribe((data) => {
      this.data = data;
    })
  }
}
