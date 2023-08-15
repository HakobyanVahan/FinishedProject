import { NgFor, NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Authors } from 'src/app/Models/authors';
import { Oneauthor } from 'src/app/Models/one-author';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-one-authors',
  templateUrl: './one-authors.component.html',
  styleUrls: ['./one-authors.component.css'],
  standalone: true,
  imports: [NgForOf]
})
export class OneAuthorsComponent implements OnInit {
  constructor(public service: RequestService, public activatedRoute: ActivatedRoute) { }

  url: string = enviroment.home.authors
  data!: Authors;
  id: number = +this.activatedRoute.snapshot.params['id'];

  ngOnInit(): void {
    this.service.getRequest<Authors>(this.url+`/${this.id}`).subscribe((data) => {
      this.data = data;
    })
  }
} 
