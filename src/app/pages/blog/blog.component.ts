import { Component, Input } from '@angular/core';
import { Allpostsslide } from 'src/app/Models/apppostsslide';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  allPostsSlideInner: Allpostsslide[] = [
    {
      id: 1,
      img: 'assets/img/image8.jpg',
      subtitle: 'STARTUP',
      title: 'Design tips for designers that cover everything you need',
      paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    },
    {
      id: 2,
      img: 'assets/img/image9.jpg',
      subtitle: 'BUSSINES',
      title: 'How to build rapport with your web design clients',
      paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    },
    {
      id: 3,
      img: 'assets/img/image10.jpg',
      subtitle: 'STARTUP',
      title: 'Logo design trends to avoid in 2022',
      paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    },
    {
      id: 4,
      img: 'assets/img/image11.jpg',
      subtitle: 'TECHNOLOGY',
      title: '8 Figma design systems you can download for free today',
      paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    },
    {
      id: 5,
      img: 'assets/img/image11.jpg',
      subtitle: 'ECONOMY',
      title: 'Font sizes in UI design: The complete guide to follow',
      paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    },
    {
      id: 6,
      img: 'assets/img/image8.jpg',
      subtitle: 'ECONOMY',
      title: 'Font sizes in UI design: The complete guide to follow',
      paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
    }
  ]

  categoryData: Category[] = [
    {
      id: 1,
      img: 'assets/img/business-logo3.png',
      title: 'Business',
      paragraph: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      id: 2,
      img: 'assets/img/business-logo4.png',
      title: 'Startup',
      paragraph: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      id: 3,
      img: 'assets/img/business-logo2.png',
      title: 'Economy',
      paragraph: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      id: 4,
      img: 'assets/img/business-logo1.png',
      title: 'Technology',
      paragraph: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    }
  ]
}
