import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';
import { Myposts } from 'src/app/Models/myposts';
import { Category } from 'src/app/Models/category';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-category-all-posts',
  templateUrl: './category-all-posts.component.html',
  styleUrls: ['./category-all-posts.component.css'],
  standalone: true,
  imports: [NgForOf]
})
export class CategoryAllPostsComponent implements OnInit{
  @Input() categoryData!: Category;
  url: string = enviroment.category.categoryAllPosts
  data: Myposts[] = [];
  constructor(public service: RequestService){}

  ngOnInit(): void {
    this.service.getRequest<Myposts[]>(this.url).subscribe((data) => {
      this.data = data
    })
  }
}
