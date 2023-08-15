import { NgForOf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Myposts } from 'src/app/Models/myposts';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-author-posts-table',
  templateUrl: './author-posts-table.component.html',
  styleUrls: ['./author-posts-table.component.css'],
  standalone: true,
  imports: [NgStyle, MatInputModule, ReactiveFormsModule, NgForOf] 
})
export class AuthorPostsTableComponent {
  constructor(public service: RequestService, public fb: FormBuilder) { }

  form!: FormGroup;
  url: string = enviroment.author.myPosts;
  data: Myposts[] = []
  item!: Myposts | undefined;
  isTrue: boolean = false;
  putOrPost: boolean = true;
  openConfirm: boolean = false;

  ngOnInit(): void {
    this.dataRequest()
    this.form = this.fb.group({
      img: '',
      subtitle: '',
      title: '',
      paragraph: ''
    })
  }

  dataRequest() {
    this.service.getRequest<Myposts[]>(this.url).subscribe((data) => {
      this.data = data;
    })
  }

  openForm(item?: Myposts) {
    this.isTrue = true;
    this.putOrPost = true;
    this.item = item;

    this.form.patchValue({
      img: 'assets/img/post.png',
      subtitle: this.item?.subtitle,
      title: this.item?.title,
      paragraph: this.item?.paragraph
    })
  }


  openPostForm() {
    this.isTrue = true;
    this.putOrPost = false;
    this.form.reset()
    this.form.patchValue({
      img: 'assets/img/post.png'
    })
  }

  closeForm() {
    this.isTrue = false
    this.openConfirm = false;
  }

  openConfirmWindow(item?: Myposts) {
    this.openConfirm = true;
    this.item = item    
  }

  send(id: number | undefined) {
    if (this.putOrPost) {
      this.service.putRequest(`${this.url}/${id}`, this.form.value).subscribe(() => { })
      this.dataRequest();
    } else {
      this.service.postRequest<Myposts>(this.url, this.form.value).subscribe(() => { })
      this.dataRequest();
    }
    this.isTrue = false;
  }

  confirmation(id: number | undefined){
    this.service.deleteRequest(this.url + `/${id}`).subscribe(() => { })
    this.openConfirm = false
    this.dataRequest();
  }
}
