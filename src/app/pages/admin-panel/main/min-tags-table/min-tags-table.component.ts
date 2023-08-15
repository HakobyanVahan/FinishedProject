import { NgForOf, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Mintags } from 'src/app/Models/min-tags';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-min-tags-table',
  templateUrl: './min-tags-table.component.html',
  styleUrls: ['./min-tags-table.component.css'],
  standalone: true,
  imports: [NgStyle, MatInputModule, ReactiveFormsModule, NgForOf] 
})
export class MinTagsTableComponent implements OnInit{
  constructor(public service: RequestService, public fb: FormBuilder) { }

  form!: FormGroup;
  url: string = enviroment.category.minTags;
  data: Mintags[] = []
  item!: Mintags | undefined;
  isTrue: boolean = false;
  putOrPost: boolean = true;
  openConfirm: boolean = false;

  ngOnInit(): void {
    this.dataRequest()
    this.form = this.fb.group({
      title: '',
    })
  }

  dataRequest() {
    this.service.getRequest<Mintags[]>(this.url).subscribe((data) => {
      this.data = data;
    })
  }

  openForm(item?: Mintags) {
    this.isTrue = true;
    this.putOrPost = true;
    this.item = item;

    this.form.patchValue({
      title: this.item?.title,
    })
  }


  openPostForm() {
    this.isTrue = true;
    this.putOrPost = false;
    this.form.reset()
  }

  closeForm() {
    this.isTrue = false
    this.openConfirm = false;
  }

  openConfirmWindow(item?: Mintags) {
    this.openConfirm = true;
    this.item = item;
  }

  send(id: number | undefined) {
    if (this.putOrPost) {
      this.service.putRequest(`${this.url}/${id}`, this.form.value).subscribe(() => { })
      this.dataRequest();
    } else {
      this.service.postRequest<Mintags>(this.url, this.form.value).subscribe(() => { })
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
