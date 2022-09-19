import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../model/register';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted = false;
  sucessMessage: String = "";
  // sucessMessType:false;
  registerForm!: FormGroup;
  emailRegex =
  '[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{3,}';
  registerUser = new Register;
  sucessMessType = false;
  passwordValida=false;
  emailValida=false;
  constructor(private formBuilder: FormBuilder,private userRegister:RegisterService,
    private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      userName: ['',Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userRole: ['', Validators.required]
    });
  }

  get myForm() {
    return this.registerForm.controls;
  }


  onSubmit() {

    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(this.registerUser);
    console.log(this.registerForm.value);
    this.userRegister.post(this.registerUser).subscribe((data) => {
      this.sucessMessType = true;
      console.log(data);
      this.sucessMessage = "User Register Sucessfully";
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
      console.log(data)

    }, (error) => {
      // this.hasErrorOccurred = true;      
      // if (error.message) {
      //   this.errorMessage = error.message;
      // }       
    });
  }
  loginUser(){
    this.router.navigate(['/login']);
  }
  passwordValidation(event:any){
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


