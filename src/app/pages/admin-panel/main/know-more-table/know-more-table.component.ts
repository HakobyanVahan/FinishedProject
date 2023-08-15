import { NgForOf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Knowmore } from 'src/app/Models/know-more';
import { Readnext } from 'src/app/Models/readnext';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-know-more-table',
  templateUrl: './know-more-table.component.html',
  styleUrls: ['./know-more-table.component.css'],
  standalone: true,
  imports: [NgStyle, MatInputModule, ReactiveFormsModule, NgForOf] 
})
export class KnowMoreTableComponent implements OnInit {
  constructor(public service: RequestService, public fb: FormBuilder) { }

  form!: FormGroup;
  url: string = enviroment.aboutUs.knowMore
  data: Knowmore[] = []
  item!: Knowmore | undefined;
  isTrue: boolean = false;
  putOrPost: boolean = true;
  openConfirm: boolean = false;

  ngOnInit(): void {
    this.dataRequest()
    this.form = this.fb.group({
      img: '',
      title: '',
      subtitle: '',
      paragraph: ''
    })
  }

  dataRequest() {
    this.service.getRequest<Knowmore[]>(this.url).subscribe((data) => {
      this.data = data;
    })
  }

  openForm(item?: Knowmore) {
    this.isTrue = true;
    this.putOrPost = true;
    this.item = item;

    this.form.patchValue({
      img: 'assets/img/education.png',
      title: this.item?.title,
      subtitle: this.item?.subtitle,
      paragraph: this.item?.paragraph
    })
  }


  openPostForm() {
    this.isTrue = true;
    this.putOrPost = false;
    this.form.reset()
    this.form.patchValue({
      img: 'assets/img/education.png'
    })
  }

  closeForm() {
    this.isTrue = false
    this.openConfirm = false;
  }

  openConfirmWindow(item?: Knowmore) {
    this.openConfirm = true;
    this.item = item
  }

  send(id: number | undefined) {
    if (this.putOrPost) {
      this.service.putRequest(`${this.url}/${id}`, this.form.value).subscribe(() => { })
      this.dataRequest();
    } else {
      this.service.postRequest<Knowmore>(this.url, this.form.value).subscribe(() => { })
      this.dataRequest();
    }
    this.isTrue = false;
  }

  confirmation(id: number | undefined) {
    this.service.deleteRequest(this.url + `/${id}`).subscribe(() => { })
    this.dataRequest();
    this.openConfirm = false
  }
}
