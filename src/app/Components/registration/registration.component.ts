import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  myForm: FormGroup;
  apitext:any="accounts/registration"
  constructor(private formBuilder: FormBuilder, private apiservice: ApiServiceService ,private router:Router) {
    this.myForm = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      firstName: ['', Validators.compose([Validators.required, Validators.min(4)])],
      lastName: ['', Validators.compose([Validators.required, Validators.min(4)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')
      ])],
      confirmPassword: ['', Validators.compose([Validators.required])],
      acceptTerms: [false, Validators.compose([Validators.required])]
    });
  }
  onSubmit() {
    if (this.myForm.valid) {
      this.apiservice.postData(this.myForm.value,this.apitext).subscribe(r => console.log(r))
      console.log(this.myForm.value);
    }
    else {
      console.log("error")
    }
  }
  login(){
    this.router.navigate([""])
  }

}
