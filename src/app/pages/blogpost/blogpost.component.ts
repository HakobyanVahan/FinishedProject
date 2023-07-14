import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Allposts } from 'src/app/Models/allposts';
import { Allpostsslide } from 'src/app/Models/apppostsslide';
import { Readnext } from 'src/app/Models/readnext';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit{
  url: string = enviroment.home.allPosts;
  id: number = +this.activeRoute.snapshot.params['id'] - 1;
  data: Allposts[] = []
  constructor(public service: RequestService, public activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.service.getRequest<Allposts[]>(this.url).subscribe((data) => {
      this.data = data;
      console.log(this.data);
    })
  }
}
