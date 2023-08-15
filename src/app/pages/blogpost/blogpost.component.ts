import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsideComponent } from 'src/app/Components/aside/aside.component';
import { ReadnextComponent } from 'src/app/Components/readnext/readnext.component';
import { Allposts } from 'src/app/Models/allposts';
import { Allpostsslide } from 'src/app/Models/apppostsslide';
import { Readnext } from 'src/app/Models/readnext';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css'],
  standalone: true,
  imports: [AsideComponent, ReadnextComponent]
})
export class BlogpostComponent implements OnInit{
  url: string = enviroment.home.allPosts;
  id: number = +this.activeRoute.snapshot.params['id'];
  data!: Allposts;
  constructor(public service: RequestService, public activeRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.service.getRequest<Allposts>(this.url + `/${this.id}`).subscribe((data) => {
      this.data = data;
    })
  }
}
