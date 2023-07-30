import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit{
  constructor(public service: RequestService){}
  url: string = enviroment.home.category;
  data: Category[] = [];

  ngOnInit(): void {
    this.service.getRequest<Category[]>(this.url).subscribe((data) => {
      this.data = data;
    })
  }

  displayedColumns: string[] = ['img', 'title', 'paragraph'];
  dataSource = this.data
}
