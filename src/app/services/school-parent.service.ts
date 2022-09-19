import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolParentService {

  constructor(private httpClient: HttpClient) { }

  private saveapiUrl:string='http://localhost:8086/api/v1/registerStudent';
  private updateapiUrl:string='http://localhost:8086/api/v1/updateStudent';
  private getapiUrl:string='http://localhost:8086/api/v1/getStudentDetails';

  private acknowldgeapiUrl:string='http://localhost:8086/api/v1/studentAcknowledge/';

  public saveStudent(schoolParent:any): Observable<any> {
    return this.httpClient.post<any>(this.saveapiUrl,schoolParent, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} });
  }
  public updateStudent(schoolParent:any): Observable<String> {
    return this.httpClient.put<String>(this.updateapiUrl,schoolParent, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} });
  }
  public getStudent(): Observable<any> {
    return this.httpClient.get(this.getapiUrl, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} });
  }
  public acknowldge(acknowldge:any,circularId:any): Observable<any> {
    return this.httpClient.put(this.acknowldgeapiUrl+circularId+'/'+acknowldge, { headers: {"Authorization" : `Bearer ${localStorage.getItem('token')}`} });
  }
}
