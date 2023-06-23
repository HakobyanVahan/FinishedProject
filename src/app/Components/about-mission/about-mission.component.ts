import { Component, Input } from '@angular/core';
import { Aboutmission } from 'src/app/Models/about-mission';

@Component({
  selector: 'app-about-mission',
  templateUrl: './about-mission.component.html',
  styleUrls: ['./about-mission.component.css']
})
export class AboutMissionComponent {
  @Input() aboutMissionInner!: Aboutmission;
}
