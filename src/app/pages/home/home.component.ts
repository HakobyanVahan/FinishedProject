import { Component, OnDestroy, OnInit } from '@angular/core';
import { Authors } from 'src/app/Models/authors';
import { RouterModule } from '@angular/router';
import { enviroment } from 'src/environments/environment';
import { RequestService } from 'src/app/services/request.service';
import { Allposts } from 'src/app/Models/allposts';
import { AllpostsComponent } from 'src/app/Components/allposts/allposts.component';
import { CategoryComponent } from 'src/app/Components/category/category.component';
import { AuthorsComponent } from 'src/app/Components/authors/authors.component';
import { AsideComponent } from 'src/app/Components/aside/aside.component';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [AllpostsComponent, CategoryComponent, AuthorsComponent, AsideComponent, RouterModule, NgForOf]
})
export class HomeComponent implements OnInit{
  constructor(public service: RequestService) { }
  url: string = enviroment.home.authors
  data: Authors[] = [];
  AllPostsurl:string = enviroment.home.allPosts
  AllPostsData:Allposts[] = [];

  ngOnInit(): void {
    this.service.getRequest<Authors[]>(this.url + '?_limit=4').subscribe((data) => {
      this.data = data;
    })

    this.service.getRequest<Allposts[]>(this.AllPostsurl + '?_limit=4').subscribe((data) => {
      this.AllPostsData = data
    })
  }
}
