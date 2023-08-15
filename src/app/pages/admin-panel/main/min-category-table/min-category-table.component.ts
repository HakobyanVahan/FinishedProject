import { NgForOf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Minicategory } from 'src/app/Models/mini-category';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-min-category-table',
  templateUrl: './min-category-table.component.html',
  styleUrls: ['./min-category-table.component.css'],
  standalone: true,
  imports: [NgStyle, MatInputModule, ReactiveFormsModule, NgForOf] 

})
export class MinCategoryTableComponent implements OnInit{
  constructor(public service: RequestService, public fb: FormBuilder) { }

  form!: FormGroup;
  url: string = enviroment.category.minCategory
  data: Minicategory[] = []
  item!: Minicategory | undefined;
  isTrue: boolean = false;
  putOrPost: boolean = true;
  openConfirm: boolean = false;

  ngOnInit(): void {
    this.dataRequest()
    this.form = this.fb.group({
      img: '',
      title: ''
    })
  }

  dataRequest() {
    this.service.getRequest<Minicategory[]>(this.url).subscribe((data) => {
      this.data = data;
    })
  }

  openForm(item?: Minicategory) {
    this.isTrue = true;
    this.putOrPost = true;
    this.item = item;

    this.form.patchValue({
      img: 'assets/img/categorization.png',
      title: this.item?.title,
    })
  }


  openPostForm() {
    this.isTrue = true;
    this.putOrPost = false;
    this.form.reset()
    this.form.patchValue({
      img: 'assets/img/categorization.png'
    })
  }

  closeForm() {
    this.isTrue = false
    this.openConfirm = false;
  }

  openConfirmWindow(item?: Minicategory) {
    this.openConfirm = true;
    this.item = item
  }

  send(id: number | undefined) {
    if (this.putOrPost) {
      this.service.putRequest(`${this.url}/${id}`, this.form.value).subscribe(() => { })
      this.dataRequest();
    } else {
      this.service.postRequest<Minicategory>(this.url, this.form.value).subscribe(() => { })
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

