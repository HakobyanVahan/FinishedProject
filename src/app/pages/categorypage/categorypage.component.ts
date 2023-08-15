import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryAllPostsComponent } from 'src/app/Components/category-all-posts/category-all-posts.component';
import { MinCategoryComponent } from 'src/app/Components/min-category/min-category.component';
import { MinTagsComponent } from 'src/app/Components/min-tags/min-tags.component';
import { Allpostsslide } from 'src/app/Models/apppostsslide';
import { Category } from 'src/app/Models/category';
import { Mintags } from 'src/app/Models/min-tags';
import { Minicategory } from 'src/app/Models/mini-category';
import { Myposts } from 'src/app/Models/myposts';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.css'],
  standalone: true,
  imports: [CategoryAllPostsComponent, MinCategoryComponent, MinTagsComponent]
})
export class CategorypageComponent{
  constructor(public activatedRoute: ActivatedRoute, public service: RequestService){}
  

  data!: Category;
  url: string = enviroment.home.category
  id: number = +this.activatedRoute.snapshot.params['id'];

  ngOnInit(): void {
    this.service.getRequest<Category>(this.url + `/${this.id}`).subscribe((data) => {
      this.data = data;
    })
  }
}
