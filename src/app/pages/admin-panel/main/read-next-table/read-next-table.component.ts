import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Readnext } from 'src/app/Models/readnext';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-read-next-table',
  templateUrl: './read-next-table.component.html',
  styleUrls: ['./read-next-table.component.css']
})
export class ReadNextTableComponent implements OnInit{
  constructor(public service: RequestService, public fb: FormBuilder) { }

  form!: FormGroup;
  url: string = enviroment.blogPost.readNext;
  data: Readnext[] = []
  item!: Readnext | undefined;
  isTrue: boolean = false;
  putOrPost: boolean = true;
  openConfirm: boolean = false;

  ngOnInit(): void {
    this.dataRequest()
    this.form = this.fb.group({
      img: '',
      name: '',
      date: '',
      title: '',
      paragraph: ''
    })
  }

  dataRequest() {
    this.service.getRequest<Readnext[]>(this.url).subscribe((data) => {
      this.data = data;
    })
  }

  openForm(item?: Readnext) {
    this.isTrue = true;
    this.putOrPost = true;
    this.item = item;

    this.form.patchValue({
      img: 'assets/img/next-page.png',
      name: this.item?.name,
      date: this.item?.date,
      title: this.item?.title,
      paragraph: this.item?.paragraph
    })
  }


  openPostForm() {
    this.isTrue = true;
    this.putOrPost = false;
    this.form.reset()
    this.form.patchValue({
      img: 'assets/img/next-page.png'
    })
  }

  closeForm() {
    this.isTrue = false
    this.openConfirm = false;
  }

  openConfirmWindow(item?: Readnext) {
    this.openConfirm = true;
    this.item = item
    console.log(item);
    
  }

  send(id: number | undefined) {
    if (this.putOrPost) {
      this.service.putRequest(`${this.url}/${id}`, this.form.value).subscribe(() => { })
      this.dataRequest();
    } else {
      this.service.postRequest<Readnext>(this.url, this.form.value).subscribe(() => { })
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
