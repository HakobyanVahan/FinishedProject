import { NgFor, NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Allposts } from 'src/app/Models/allposts';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment'

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.css'],
  standalone: true,
  imports: [NgForOf]
})
export class AllpostsComponent{
  @Input() allPostsInner!: Allposts;
  
}
