import { Component, Input } from '@angular/core';
import { Myposts } from 'src/app/Models/myposts';

@Component({
  selector: 'app-mypostscom',
  templateUrl: './mypostscom.component.html',
  styleUrls: ['./mypostscom.component.css']
})
export class MypostscomComponent {
  @Input() myPostsInner!: Myposts;
}
