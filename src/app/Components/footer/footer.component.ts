import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Footer } from 'src/app/Models/footer';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  constructor(public fb: FormBuilder, public service: RequestService) { }

  form!: FormGroup;
  url: string = enviroment.footer.footerUrl
  value!: Footer;

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", Validators.pattern(/^[a-zA-Z0-9\.n_-]{1,}@[a-zA-Z0-9]{1,}\.[a-z]{2,4}$/)]
    })
  }

  send() {
    this.value = this.form.value;
    this.service.postRequest<Footer>(this.url, this.value).subscribe(() => { })    
  }
}
