import { Component, Input } from '@angular/core';
import { Minicategory } from 'src/app/Models/mini-category';

@Component({
  selector: 'app-min-category',
  templateUrl: './min-category.component.html',
  styleUrls: ['./min-category.component.css']
})
export class MinCategoryComponent {
  @Input() minCategoryInner!: Minicategory;
}
