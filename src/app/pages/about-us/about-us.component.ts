import { Component } from '@angular/core';
import { Authors } from 'src/app/Models/authors';
import { Knowmore } from 'src/app/Models/know-more';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
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
    },
    {
      id: 5,
      img: 'assets/img/image19.png',
      name: 'Leslie Alexander',
      paragraph: 'Content Writer @Company',
      icon1: 'assets/img/facebook.png',
      icon2: 'assets/img/Group.png',
      icon3: 'assets/img/twitter.png',
      icon4: 'assets/img/linkedin.png'
    },
    {
      id: 6,
      img: 'assets/img/image22.png',
      name: 'Leslie Alexander',
      paragraph: 'Content Writer @Company',
      icon1: 'assets/img/facebook.png',
      icon2: 'assets/img/Group.png',
      icon3: 'assets/img/twitter.png',
      icon4: 'assets/img/linkedin.png'
    },
    {
      id: 7,
      img: 'assets/img/image20.png',
      name: 'Leslie Alexander',
      paragraph: 'Content Writer @Company',
      icon1: 'assets/img/facebook.png',
      icon2: 'assets/img/Group.png',
      icon3: 'assets/img/twitter.png',
      icon4: 'assets/img/linkedin.png'
    },
    {
      id: 8,
      img: 'assets/img/image21.png',
      name: 'Leslie Alexander',
      paragraph: 'Content Writer @Company',
      icon1: 'assets/img/facebook.png',
      icon2: 'assets/img/Group.png',
      icon3: 'assets/img/twitter.png',
      icon4: 'assets/img/linkedin.png'
    }
  ]

  knowMoreData: Knowmore[] = [
    {
      id: 1,
      img: 'assets/img/image17.jpg',
      title: 'Our team of creatives',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      paragraph: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    },
    {
      id: 2,
      img: 'assets/img/image18.jpg',
      title: 'Why we started this blog',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      paragraph: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
    },
  ]
}
