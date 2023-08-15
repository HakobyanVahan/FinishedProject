import { NgForOf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Authors } from 'src/app/Models/authors';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-authors-table',
  templateUrl: './authors-table.component.html',
  styleUrls: ['./authors-table.component.css'],
  standalone: true,
  imports: [NgStyle, MatInputModule, ReactiveFormsModule, NgForOf]
})
export class AuthorsTableComponent implements OnInit{
  constructor(public service: RequestService, public fb: FormBuilder) { }

  form!: FormGroup;
  url: string = enviroment.home.authors;
  data: Authors[] = [];
  item!: Authors | undefined;
  isTrue: boolean = false;
  putOrPost: boolean = true;
  openConfirm: boolean = false;

  ngOnInit(): void {
    this.dataRequest()
    this.form = this.fb.group({
      img: '',
      img2: '',
      name: '',
      social: '',
      paragraph:''
    })
  }

  dataRequest() {
    this.service.getRequest<Authors[]>(this.url).subscribe((data) => {
      this.data = data;
    })
  }

  openForm(item?: Authors) {
    this.isTrue = true;
    this.putOrPost = true;
    this.item = item;

    this.form.patchValue({
      img: 'assets/img/writer.png',
      img2: 'assets/img/writer.png',
      name: this.item?.name,
      social: this.item?.socialIcons,
      paragraph: this.item?.paragraph
    })
  }


  openPostForm() {
    this.isTrue = true;
    this.putOrPost = false;
    this.form.reset()
    this.form.patchValue({
      img: 'assets/img/writer.png',
      img2: 'assets/img/writer.png',
    })
  }

  closeForm() {
    this.isTrue = false
    this.openConfirm = false;
  }

  openConfirmWindow(item?: Authors) {
    this.openConfirm = true;
    this.item = item
    console.log(item);
    
  }

  send(id: number | undefined) {
    if (this.putOrPost) {
      this.service.putRequest(`${this.url}/${id}`, this.form.value).subscribe(() => { })
      this.dataRequest();
    } else {
      this.service.postRequest<Authors>(this.url, this.form.value).subscribe(() => { })
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
