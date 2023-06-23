import { Component, Input } from '@angular/core';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() categoryInner!: Category;
}
