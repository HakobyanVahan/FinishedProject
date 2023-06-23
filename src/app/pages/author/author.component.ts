import { Component } from '@angular/core';
import { Allposts } from 'src/app/Models/allposts';
import { Allpostsslide } from 'src/app/Models/apppostsslide';
import { Oneauthor } from 'src/app/Models/one-author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  oneAuhtorData: Oneauthor[] = [
    {
      id: 1,
      img: 'assets/img/image24.jpg',
      title: 'Hey there, I’m Andrew Jonhson and welcome to my Blog',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.',
      socialsIcons: ['assets/img/facebook.png', 'assets/img/twitter.png', 'assets/img/Group.png', 'assets/img/linkedin.png']
    }
  ]

  myPostsData: Allpostsslide[] = [
    {
      id: 1,
      img: 'assets/img/image25.jpg',
      subtitle: 'Business',
      title: 'Font sizes in UI design: The complete guide to follow',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      img: 'assets/img/image26.jpg',
      subtitle: 'Economy',
      title: 'How to build rapport with your web design clients',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ]
}
