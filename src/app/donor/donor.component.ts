import { Component, OnInit } from '@angular/core';
import { Donor } from '../donor';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {


  donors: Donor[] = [
    new Donor(1, 'Nairobi,Kenya', 'I like helping out','0743502214',8746,5000,9845,'Gumbaru Charity', new Date(2020,4,21)),
    new Donor(1, 'Kisumu,Kenya', 'I passed through alot and I dont want somebody else to pass through what I passed through and I am in a position to help','0743502214',8746,5000,9845,'Gumbaru Charity', new Date(2020,4,21)),
    new Donor(1, 'Khartoum,Sudan', 'Wiping out tears when I am in a position to do so','0743502214',8746,5000,9845,'Gumbaru Charity', new Date(2020,4,21)),
    new Donor(1, 'Tokyo,Japan', 'Always ready to help where needed','0743502214',8746,5000,9845,'Gumbaru Charity', new Date(2020,4,21)),
    new Donor(1, 'Beijing,China', 'Helping is my hobby','0743502214',8746,5000,9845,'Gumbaru Charity', new Date(2020,4,21)),
    new Donor(1, 'Nairobi,Kenya', 'Smilling faces is what I want to see','0743502214',8746,5000,9845,'Gumbaru Charity', new Date(2020,4,21)),
  ];

  toggleDetails(index) {
    this.donors[index].details = !this.donors[index].details;
  }

  addNewDonor(donor) {
    let donorLength = this.donors.length;
    donor.id = donorLength + 1;
    donor.completeDate = new Date(donor.completeDate)
    this.donors.push(donor)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
