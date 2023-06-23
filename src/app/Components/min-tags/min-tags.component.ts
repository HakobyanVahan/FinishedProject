import { Component, Input } from '@angular/core';
import { Mintags } from 'src/app/Models/min-tags';

@Component({
  selector: 'app-min-tags',
  templateUrl: './min-tags.component.html',
  styleUrls: ['./min-tags.component.css']
})
export class MinTagsComponent {
  @Input() minTagsInner!: Mintags;
}
