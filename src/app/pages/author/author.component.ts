import { Component, OnInit } from '@angular/core';
import { Allposts } from 'src/app/Models/allposts';
import { Allpostsslide } from 'src/app/Models/apppostsslide';
import { Oneauthor } from 'src/app/Models/one-author';
import { ActivatedRoute } from '@angular/router';
import { Authors } from 'src/app/Models/authors';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent{

}
