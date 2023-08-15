import { NgFor, NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Minicategory } from 'src/app/Models/mini-category';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-min-category',
  templateUrl: './min-category.component.html',
  styleUrls: ['./min-category.component.css'],
  standalone: true,
  imports: [NgForOf]
})
export class MinCategoryComponent implements OnInit{
  @Input() minCategoryInner!: Minicategory;
  url: string = enviroment.category.minCategory
  data: Minicategory[] = [];

  constructor(public service: RequestService){}

  ngOnInit(): void {
    this.service.getRequest<Minicategory[]>(this.url).subscribe((data) => {
      this.data = data
    })
  }
}
