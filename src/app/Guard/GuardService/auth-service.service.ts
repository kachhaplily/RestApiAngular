import { Injectable } from '@angular/core';
import { Observable,of,throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/Services/api-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router:Router,private apiservice:ApiServiceService) { }
  getToken(){
    return localStorage.getItem("token")
  }
  logout(){
    localStorage.removeItem("token")
  }
  login(value:any,apitext:any):Observable <any>{
    this.apiservice.postData(value,apitext).subscribe((r)=>{
      localStorage.setItem("token",r.jwtToken)
      console.log(r)})
    return of ("login succed")
  }
}
