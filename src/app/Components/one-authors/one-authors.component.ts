import { Component, Input } from '@angular/core';
import { Oneauthor } from 'src/app/Models/one-author';

@Component({
  selector: 'app-one-authors',
  templateUrl: './one-authors.component.html',
  styleUrls: ['./one-authors.component.css']
})
export class OneAuthorsComponent {
  @Input() oneAuthorInner!: Oneauthor
}
