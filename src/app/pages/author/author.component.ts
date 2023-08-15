import { Component, OnInit } from '@angular/core';
import { MypostscomComponent } from 'src/app/Components/mypostscom/mypostscom.component';
import { OneAuthorsComponent } from 'src/app/Components/one-authors/one-authors.component';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  standalone: true,
  imports:[OneAuthorsComponent, MypostscomComponent]
})
export class AuthorComponent{

}
