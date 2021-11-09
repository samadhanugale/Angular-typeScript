import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = "";
  password: string = "";
  confirmPassword: string = "";
  email: string = "";
  phno: number = 0;
  age: number = 0;

  registerForm: FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      userName: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      phno: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required])

    })
  }

  get uname() {
    return this.registerForm.get("userName");
  }
  get phone() {
    return this.registerForm.get("phno");
  }
  get userAge() {
    return this.registerForm.get("age");
  }

  get pass() {
    return this.registerForm.get("password");
  }
  get mail() {
    return this.registerForm.get("email");
  }
  get confPass() {
    return this.registerForm.get("confirmPassword");
  }
  registerFun() {
    console.log(this.registerForm.value);
  }

  ngOnInit(): void {
  }

}
