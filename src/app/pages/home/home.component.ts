import { Component } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { Authors } from 'src/app/Models/authors';
import { Allposts } from 'src/app/Models/allposts';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
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

  authorsData: Authors[] = [
    {
      id: 1,
      img: 'assets/img/image3.png',
      name: 'Floyd Miles',
      paragraph: 'Content Writer @Company',
      icon1: 'assets/img/facebook.png',
      icon2: 'assets/img/Group.png',
      icon3: 'assets/img/twitter.png',
      icon4: 'assets/img/linkedin.png'
    },
    {
      id: 2,
      img: 'assets/img/image4.png',
      name: 'Dianna Rusel',
      paragraph: 'Content Writer @Company',
      icon1: 'assets/img/facebook.png',
      icon2: 'assets/img/Group.png',
      icon3: 'assets/img/twitter.png',
      icon4: 'assets/img/linkedin.png'
    },
    {
      id: 3,
      img: 'assets/img/image5.png',
      name: 'Jenny Wilson',
      paragraph: 'Content Writer @Company',
      icon1: 'assets/img/facebook.png',
      icon2: 'assets/img/Group.png',
      icon3: 'assets/img/twitter.png',
      icon4: 'assets/img/linkedin.png'
    },
    {
      id: 4,
      img: 'assets/img/image6.png',
      name: 'Leslie Alexander',
      paragraph: 'Content Writer @Company',
      icon1: 'assets/img/facebook.png',
      icon2: 'assets/img/Group.png',
      icon3: 'assets/img/twitter.png',
      icon4: 'assets/img/linkedin.png'
    }
  ]

  allPostsData: Allposts[] = [
    {
      id: 1,
      paragraph: 'By John Deo | Aug 23, 2021',
      title: '8 Figma design systems that you can download for free today.'
    },
    {
      id: 2,
      paragraph: 'By John Deo | Aug 23, 2021',
      title: '8 Figma design systems that you can download for free today.'
    },
    {
      id: 3,
      paragraph: 'By John Deo | Aug 23, 2021',
      title: '8 Figma design systems that you can download for free today.'
    },
    {
      id: 4,
      paragraph: 'By John Deo | Aug 23, 2021',
      title: '8 Figma design systems that you can download for free today.'
    }
  ]

  
}
