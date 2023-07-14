import { Component, Input, OnInit } from '@angular/core';
import { Mintags } from 'src/app/Models/min-tags';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-min-tags',
  templateUrl: './min-tags.component.html',
  styleUrls: ['./min-tags.component.css']
})
export class MinTagsComponent implements OnInit{
  @Input() minTagsInner!: Mintags;

  url: string = enviroment.category.minTags
  data: Mintags[] = [];

  constructor(public service: RequestService){}

  ngOnInit(): void {
    this.service.getRequest<Mintags[]>(this.url).subscribe((data) => {
      this.data = data
    })
  }
}
