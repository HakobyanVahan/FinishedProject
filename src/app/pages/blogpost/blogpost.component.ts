import { Component } from '@angular/core';
import { Readnext } from 'src/app/Models/readnext';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent {
  readNextArr: Readnext[] = [
    {
      id: 1,
      img: 'assets/img/image13.jpg',
      name: 'John Doe',
      date: 'Aug 23, 2021',
      title: 'A UX Case Study Creating a Studious Environment for Students:',
      paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    },
    {
      id: 2,
      img: 'assets/img/image14.jpg',
      name: 'John Doe',
      date: 'Aug 23, 2021',
      title: 'A UX Case Study Creating a Studious Environment for Students:',
      paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    },
    {
      id: 3,
      img: 'assets/img/image15.jpg',
      name: 'John Doe',
      date: 'Aug 23, 2021',
      title: 'A UX Case Study Creating a Studious Environment for Students:',
      paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    }
  ]
}
