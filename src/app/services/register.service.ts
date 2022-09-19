import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../model/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private httpClient: HttpClient) { }
  private registerapiUrl:string='http://localhost:8086/api/user/v1/registerUser';
  public post(user: Register): Observable<any> {
    return this.httpClient.post(this.registerapiUrl, user);
  }
}
