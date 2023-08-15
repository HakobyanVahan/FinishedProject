import { Component, Input, OnInit } from '@angular/core';
import { Authors } from 'src/app/Models/authors';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  imports: [NgFor]
})
export class AuthorsComponent { 
  @Input() authorsInner!: Authors;
  @Input() authorsId!: string;
 
}
