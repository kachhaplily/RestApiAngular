import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { AuthServiceService } from 'src/app/Guard/GuardService/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myloginform: FormGroup;
  apitext:any="accounts/authenticate"
  constructor(private formBuilder: FormBuilder,private apiservice: ApiServiceService,private router: Router,private auth:AuthServiceService){
    this.myloginform = this.formBuilder.group({
      email: ['', Validators.compose( [Validators.required, Validators.email])],
      password: ['',Validators.compose( [Validators.required, Validators.minLength(6),
      // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')
      ])],
    });
  }
  onLogin() {
    if (this.myloginform.valid) {
      this.auth.login(this.myloginform.value,this.apitext).subscribe(res=>this.router.navigate(["account"]))
    }
    else{
      console.log("error")
    }
  }

}
