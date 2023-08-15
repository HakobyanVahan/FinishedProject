import { NgFor, NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Myposts } from 'src/app/Models/myposts';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-mypostscom',
  templateUrl: './mypostscom.component.html',
  styleUrls: ['./mypostscom.component.css'],
  standalone: true,
  imports: [NgForOf]
})
export class MypostscomComponent implements OnInit{
  @Input() myPostsInner!: Myposts;

  url: string = enviroment.author.myPosts
  data: Myposts[] = []

  constructor(public service: RequestService){}

  ngOnInit() : void{
    this.service.getRequest<Myposts[]>(this.url).subscribe((data) => {
      this.data = data;
    })
  }
}
