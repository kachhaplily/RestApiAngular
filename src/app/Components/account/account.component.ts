import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/Services/api-service.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  accountdata:any[]=[];
  constructor(private apiservice:ApiServiceService){
  }
  ngOnInit(): void {
    this.apiservice.getData('accounts').subscribe((data) => {
      this.accountdata = data;
      console.log(this.accountdata);
    });

  }


}
