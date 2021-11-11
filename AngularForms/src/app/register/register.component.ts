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
      userName: new FormControl("", [Validators.required, Validators.pattern("^[A_Za-zA-Z]+$")]),
      password: new FormControl("", [Validators.required,Validators.pattern("(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}"),Validators.minLength(4),Validators.maxLength(12)]),
      confirmPassword: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required,Validators.email]),
      phno: new FormControl("", [Validators.required,Validators.minLength(10),Validators.maxLength(11),Validators.pattern("[7-9]{2}[0-9]{8}")]),
      age: new FormControl("", [Validators.required,Validators.min(1),Validators.max(120)])
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
  onPasswordChange() {
    if (this.confPass.value == this.pass.value) {
      this.confPass.setErrors(null);
    } else {
      this.confPass.setErrors({ mismatch: true });
    }
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
