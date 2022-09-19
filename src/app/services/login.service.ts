import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from '../model/login';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
   constructor(private httpClient: HttpClient) { }
  private apiUrl:string='http://localhost:8086/api/user/v1/loginUser';
  public post(user: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, user);
  }
}
