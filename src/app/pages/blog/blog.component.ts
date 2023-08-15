import { Component, Input } from '@angular/core';
import { AllpostsslideComponent } from 'src/app/Components/allpostsslide/allpostsslide.component';
import { AsideComponent } from 'src/app/Components/aside/aside.component';
import { CategoryComponent } from 'src/app/Components/category/category.component';
import { Allpostsslide } from 'src/app/Models/apppostsslide';
import { Category } from 'src/app/Models/category';

@Component({
  standalone: true,
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  imports: [CategoryComponent, AllpostsslideComponent, AsideComponent]
})
export class BlogComponent {
  
}
