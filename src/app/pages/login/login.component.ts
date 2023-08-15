import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/login';
import { Tokenresponse } from 'src/app/Models/login-response';
import { RequestService } from 'src/app/services/request.service';
import { enviroment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  constructor(public fb: FormBuilder, public service: RequestService, public router: Router) { }

  form!: FormGroup;
  url: string = "https://reqres.in/api/login"
  data!: Tokenresponse

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  send() {
    this.service.postRequest<Login>(this.url, this.form.value).subscribe((data) => {
      this.data = data as Tokenresponse;
      localStorage.setItem('token', this.data.token);
      this.router.navigate(['/admin-panel']);
    })
  }
}
