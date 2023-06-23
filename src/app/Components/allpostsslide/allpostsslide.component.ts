import { Component, Input } from '@angular/core';
import { Allpostsslide } from 'src/app/Models/apppostsslide';

@Component({
  selector: 'app-allpostsslide',
  templateUrl: './allpostsslide.component.html',
  styleUrls: ['./allpostsslide.component.css']
})
export class AllpostsslideComponent {
  @Input() allPostsSlideInner!: Allpostsslide;
}
