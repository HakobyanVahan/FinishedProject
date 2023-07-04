import { Component, Input } from '@angular/core';
import { Knowmore } from 'src/app/Models/know-more';

@Component({
  selector: 'app-know-more',
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.css']
})
export class KnowMoreComponent {
  @Input() knowMoreInner!: Knowmore;
  @Input() knowMoreIndex!: number;
}
