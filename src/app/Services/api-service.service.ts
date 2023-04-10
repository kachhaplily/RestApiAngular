import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  apiUrl = 'https://real-pear-fly-kilt.cyclic.app/';
  token: any = localStorage.getItem("token")
  constructor(private http: HttpClient) { }
  postData(data: any, apiStrin: any): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    return this.http.post<any>(this.apiUrl + apiStrin, data, { headers: headers });
  }
  getData(apiStrin: any): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    return this.http.get<any>(this.apiUrl + apiStrin, { headers: headers });
  }
}
