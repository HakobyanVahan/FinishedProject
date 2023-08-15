import { NgForOf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Allposts } from 'src/app/Models/allposts';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-all-posts-table',
  templateUrl: './all-posts-table.component.html',
  styleUrls: ['./all-posts-table.component.css'],
  standalone: true,
  imports: [NgStyle, MatInputModule, ReactiveFormsModule, NgForOf] 
})
export class AllPostsTableComponent implements OnInit{
  constructor(public service: RequestService, public fb: FormBuilder) { }

  form!: FormGroup;
  url: string = enviroment.home.allPosts;
  data: Allposts[] = []
  item!: Allposts | undefined;
  isTrue: boolean = false;
  putOrPost: boolean = true;
  openConfirm: boolean = false;

  ngOnInit(): void {
    this.dataRequest()
    this.form = this.fb.group({
      author: '',
      date: '',
      title: '',
      img: '',
      icon: '',
      subtitle: '',
      secondImage: '',
      paragraph: '',
    })
  }

  dataRequest() {
    this.service.getRequest<Allposts[]>(this.url).subscribe((data) => {
      this.data = data;
    })
  }

  openForm(item?: Allposts) {
    this.isTrue = true;
    this.putOrPost = true;
    this.item = item;

    this.form.patchValue({
      author: this.item?.author,
      date: this.item?.date,
      title: this.item?.title,
      img: 'assets/img/statistics.png',
      icon: 'assets/img/statistics.png',
      subtitle: this.item?.subtitle,
      secondImage: 'assets/img/statistics.png',
      paragraph: this.item?.paragraph,
    })
  }


  openPostForm() {
    this.isTrue = true;
    this.putOrPost = false;
    this.form.reset()
    this.form.patchValue({
      img: 'assets/img/statistics.png',
      icon: 'assets/img/statistics.png',
      secondImage:'assets/img/statistics.png',
    })
  }

  closeForm() {
    this.isTrue = false
    this.openConfirm = false;
  }

  openConfirmWindow(item?: Allposts) {
    this.openConfirm = true;
    this.item = item

  }

  send(id: number | undefined) {
    if (this.putOrPost) {
      this.service.putRequest(`${this.url}/${id}`, this.form.value).subscribe(() => { })
      this.dataRequest();
    } else {
      this.service.postRequest<Allposts>(this.url, this.form.value).subscribe(() => { })
      this.dataRequest();
    }
    this.isTrue = false;
  }

  confirmation(id: number | undefined) {
    this.service.deleteRequest(this.url + `/${id}`).subscribe(() => { })
    this.openConfirm = false
    this.dataRequest();
  }
}
