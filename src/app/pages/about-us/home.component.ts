import { Component, OnDestroy, OnInit } from '@angular/core';
import { Authors } from 'src/app/Models/authors';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { enviroment } from 'src/environments/environment';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(public service: RequestService) { }
  url: string = enviroment.home.authors
  data: Authors[] = [];

  ngOnInit(): void {
    this.service.getRequest<Authors[]>(this.url + '?_limit=4').subscribe((data) => {
      this.data = data;
    })
  }
}
