import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SchoolStafComponent } from './school-staf/school-staf.component';
import { SchoolParentComponent } from './school-parent/school-parent.component';
import { CircularComponent } from './circular/circular.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'schoolStaf', component: SchoolStafComponent },
  { path: 'schoolParent', component: SchoolParentComponent },
  { path: 'circular', component: CircularComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
