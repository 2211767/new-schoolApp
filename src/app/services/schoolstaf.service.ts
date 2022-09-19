import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SchoolstafService {
  constructor(private httpClient: HttpClient) { }
  private getStudentapiUrl:string='http://localhost:8086/api/v1/getAllStudentList';
  private putStudentStatusapiUrl:string='http://localhost:8086/api/v1/studentStatus/';
  private updateCircularStatusapiUrl:string='http://localhost:8086/api/v1/studentNode/';

  public getStudentDetails(): Observable<any> {
    return this.httpClient.get<any>(this.getStudentapiUrl, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} });
  }
  public updateStatus(registerId:String,status:string): Observable<any> {
    return this.httpClient.put(this.putStudentStatusapiUrl+registerId+'/'+status, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} });
  }
  public updateCircular(circularData:string): Observable<any> { 
    return this.httpClient.put(this.updateCircularStatusapiUrl+circularData,{ headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} });
  }
}
