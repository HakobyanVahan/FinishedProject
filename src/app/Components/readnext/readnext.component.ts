import { Component, Input } from '@angular/core';
import { Readnext } from 'src/app/Models/readnext';

@Component({
  selector: 'app-readnext',
  templateUrl: './readnext.component.html',
  styleUrls: ['./readnext.component.css']
})
export class ReadnextComponent {
  @Input() readNextInner!: Readnext;
}
