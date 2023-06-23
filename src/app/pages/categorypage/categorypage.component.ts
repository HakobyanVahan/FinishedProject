import { Component } from '@angular/core';
import { Allpostsslide } from 'src/app/Models/apppostsslide';
import { Mintags } from 'src/app/Models/min-tags';
import { Minicategory } from 'src/app/Models/mini-category';
import { Myposts } from 'src/app/Models/myposts';

@Component({
  selector: 'app-categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.css']
})
export class CategorypageComponent {
  categoryAllPosts: Myposts[] = [
    {
      id: 1,
      img: 'assets/img/image23.jpg',
      subtitle: 'Business',
      title: 'Top 6 free website mockup tools 2022',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
    },
    {
      id: 2,
      img: 'assets/img/image23.jpg',
      subtitle: 'Business',
      title: 'Step-by-step guide to choosing great font pairs',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
    },
    {
      id: 3,
      img: 'assets/img/image23.jpg',
      subtitle: 'Business',
      title: 'Ten free foogle fonts that you should use',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
    },
    {
      id: 4,
      img: 'assets/img/image23.jpg',
      subtitle: 'Business',
      title: 'What did I learn from doing 50+ design sprints?',
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.'
    }
  ]

  minCategoryData: Minicategory[] = [
    {
      id: 1,
      img: 'assets/img/business-logo4.png',
      title: 'Startup'
    },
    {
      id: 2,
      img: 'assets/img/business-logo3.png',
      title: 'Bussines'
    },
    {
      id: 3,
      img: 'assets/img/business-logo2.png',
      title: 'Economy'
    },
    {
      id: 4,
      img: 'assets/img/business-logo1.png',
      title: 'Technology'
    }
  ]

  minTagsData: Mintags[] = [
    {
      id: 1,
      title: 'Business'
    },
    {
      id: 2,
      title: 'Experience'
    },
    {
      id: 3,
      title: 'Screen'
    },
    {
      id: 4,
      title: 'Technology'
    },
    {
      id: 5,
      title: 'Marketing'
    },
    {
      id: 6,
      title: 'Life'
    }
  ]
}
