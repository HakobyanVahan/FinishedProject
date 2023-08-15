import { NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Allpostsslide } from 'src/app/Models/apppostsslide';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-allpostsslide',
  templateUrl: './allpostsslide.component.html',
  styleUrls: ['./allpostsslide.component.css'],
  standalone: true,
  imports: [RouterModule, NgForOf]
})
export class AllpostsslideComponent implements OnInit{
  url: string = enviroment.home.allPosts;
  data: Allpostsslide[] = []
  constructor(public service: RequestService){}

  ngOnInit(): void {
    this.service.getRequest<Allpostsslide[]>(this.url).subscribe((data) => {
      this.data = data;
    })
  }
}
