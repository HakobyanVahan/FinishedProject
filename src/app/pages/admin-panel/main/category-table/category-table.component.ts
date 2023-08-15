import { NgForOf, NgStyle } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Data } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css'],
  standalone: true,
  imports: [NgStyle, MatInputModule, ReactiveFormsModule, NgForOf]
})
export class CategoryTableComponent implements OnInit {
  constructor(public service: RequestService, public fb: FormBuilder) { }

  form!: FormGroup;
  url: string = enviroment.home.category;
  data: Category[] = []
  item!: Category | undefined;
  isTrue: boolean = false;
  putOrPost: boolean = true;
  openConfirm: boolean = false;

  ngOnInit(): void {
    this.dataRequest()
    this.form = this.fb.group({
      img: '',
      title: '',
      paragraph: ''
    })
  }

  dataRequest() {
    this.service.getRequest<Category[]>(this.url).subscribe((data) => {
      this.data = data;
    })
  }

  openForm(item?: Category) {
    this.isTrue = true;
    this.putOrPost = true;
    this.item = item;

    this.form.patchValue({
      img: 'assets/img/categories.png',
      title: this.item?.title,
      paragraph: this.item?.paragraph
    })
  }


  openPostForm() {
    this.isTrue = true;
    this.putOrPost = false;
    this.form.reset()
    this.form.patchValue({
      img: 'assets/img/categories.png'
    })
  }

  closeForm() {
    this.isTrue = false
    this.openConfirm = false;
  }

  openConfirmWindow(item?: Category) {
    this.openConfirm = true;
    this.item = item
    console.log(item);
    
  }

  send(id: number | undefined) {
    if (this.putOrPost) {
      this.service.putRequest(`${this.url}/${id}`, this.form.value).subscribe(() => { })
      this.dataRequest();
    } else {
      this.service.postRequest<Category>(this.url, this.form.value).subscribe(() => { })
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
