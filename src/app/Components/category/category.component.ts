import { NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  standalone: true,
  imports: [RouterModule, NgForOf]
})
export class CategoryComponent implements OnInit {
  @Input() categoryInner!: Category;
  constructor(public service: RequestService) { }

  data: Category[] = [];
  url: string = enviroment.home.category

  ngOnInit(): void {
    this.service.getRequest<Category[]>(this.url).subscribe((data) => {
      this.data = data;
    })
  }
}
