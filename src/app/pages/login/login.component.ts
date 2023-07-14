import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  hide = true;

  constructor(public fb: FormBuilder){}

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      nickname: "",
      password: ""
    })
  }

  send(){
    
  }
}
