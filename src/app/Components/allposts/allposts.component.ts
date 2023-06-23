import { Component, Input } from '@angular/core';
import { Allposts } from 'src/app/Models/allposts';

@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.css']
})
export class AllpostsComponent {
  @Input() allPostsInner!: Allposts;
}
