import { Component } from '@angular/core';
import { AuthServiceService } from './Guard/GuardService/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RestApiAngular';
  constructor(private auth:AuthServiceService,private route:Router){}
  isUserLoggedIn(): boolean {
    return this.auth.isLogin();
  }
  logout(){
    this.auth.logout()
  }
}


