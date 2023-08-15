import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {
  scrollToBottom(){
    window.scrollTo({top:document.body.scrollHeight, behavior: 'smooth'})
  }
}
