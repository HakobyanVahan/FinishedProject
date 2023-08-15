import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainComponent } from './main/main.component';
import { AllPostsTableComponent } from './main/all-posts-table/all-posts-table.component';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
  standalone: true,
  imports: [MatSidenavModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MainComponent, RouterModule],
})
export class AdminPanelComponent {
  @ViewChild('logoutconfirm') logOutConfirm!: ElementRef;
  constructor(public router: Router) { }

  openLogOutConfirm() {
    this.logOutConfirm.nativeElement.style.display = 'flex';
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

  cancel() {
    this.logOutConfirm.nativeElement.style.display = 'none';
  }
}
