import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SchoolStafComponent } from './school-staf/school-staf.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchoolParentComponent } from './school-parent/school-parent.component';
import { CircularComponent } from './circular/circular.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SchoolParentComponent,
    SchoolStafComponent,
    CircularComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
     
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
