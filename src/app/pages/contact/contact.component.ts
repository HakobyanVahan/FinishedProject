import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/Models/contact';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  url: string = enviroment.contact.contactUrl;
  value!: Contact;

  constructor(public fb: FormBuilder, public service: RequestService) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9\.n_-]{1,}@[a-zA-Z0-9]{1,}\.[a-z]{2,4}$/)]],
      select: ["Query Related", Validators.required],
      textarea: ["", Validators.required],
    })
  }

  send() {
    this.value = this.form.value;
    this.service.postRequest<Contact>(this.url, this.value).subscribe(() => { })
  }
}
