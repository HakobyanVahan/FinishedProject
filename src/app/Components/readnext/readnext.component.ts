import { Component, Input, OnInit } from '@angular/core';
import { Readnext } from 'src/app/Models/readnext';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-readnext',
  templateUrl: './readnext.component.html',
  styleUrls: ['./readnext.component.css']
})
export class ReadnextComponent implements OnInit{
  constructor(public service: RequestService){}

  url: string = enviroment.blogPost.readNext
  data: Readnext[] = [];

  ngOnInit(): void {
    this.service.getRequest<Readnext[]>(this.url).subscribe((data) => {
      this.data = data;
    })
  }
}
