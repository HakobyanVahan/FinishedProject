import { Component, Input } from '@angular/core';
import { Text } from 'src/app/Models/text';

@Component({
  selector: 'app-textcom',
  templateUrl: './textcom.component.html',
  styleUrls: ['./textcom.component.css']
})
export class TextcomComponent {
  @Input() textInner!: Text;
}
