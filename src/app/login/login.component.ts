import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from '../model/login';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  userlogin = new LoginUser;
  hasErrorOccurred = false;
  errorMessage: String = "";
  sucessMessage: String = "";
  sucessMessType = false;
  passwordValida = false;
  emailValida = false;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get myForm() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.userlogin);
    console.log(this.loginForm.value);
    localStorage.setItem('token', "")
    this.loginService.post(this.loginForm.value).subscribe((response) => {
      console.log(response.token);
      localStorage.setItem('token', response.token)
      if (response.message == "User successfully logged in" && response.userType == "Admin") {
        setTimeout(() => {
          this.router.navigate(['/schoolStaf']);
        }, 2000);
      }
      else if (response.message == "User successfully logged in" && response.userType == "User") {
        setTimeout(() => {
          this.router.navigate(['/schoolParent']);
        }, 2000);
      }
      else {
        this.errorMessage = "Invalid Credentials";
        this.hasErrorOccurred = true;
        setTimeout(() => {
          this.errorMessage = "";
        }, 1000);

      }
    }, (error) => {
      // this.hasErrorOccurred = true;
      // this.errorMessage = error.message;
      console.log(error)
    });
  }
  onRegister() {
    this.router.navigate(['/register'])
  }
  passwordValidation(event: any) {
    if (event.target.value.length == 6) {
      this.passwordValida = false;
    }
    else {
      this.passwordValida = true;
    }
  }
  emailValidation(event: any) {
    if (event.target.value.length == 8) {
      this.emailValida = false;
    }
    else if (event.target.value.length > 8) {
      this.emailValida = false;
    }
    else {
      this.emailValida = true;
    }
  }
}
