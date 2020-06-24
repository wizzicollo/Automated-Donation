import { Component, OnInit } from '@angular/core';
import { CharityService } from './../../services/charity.service';

@Component({
  selector: 'app-register-charity',
  templateUrl: './register-charity.component.html',
  styleUrls: ['./register-charity.component.css']
})
export class RegisterCharityComponent implements OnInit {

  charity = {
    name: '',
    email: '',
    description: '',
    location: '',
    phone_number: '',
    target_amount: '',
    beneficiary: '',
    approved: false
  };
  submitted = false;


constructor(private charityService: CharityService) { }

ngOnInit() {
}

saveCharity() {
  const data = {
    name: this.charity.name,
    description: this.charity.description
  };

  this.charityService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
}

newCharity() {
    this.submitted = false;
    this.charity = {
      name: '',
      email: '',
      description: '',
      location: '',
      phone_number: '',
      target_amount: '',
      beneficiary: '',
      approved: false
    };
  }
}


