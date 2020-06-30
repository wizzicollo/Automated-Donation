import { Component, OnInit } from '@angular/core';
import { Donor } from '../donor';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {

  donors: Donor[] = [
    new Donor(50000, 'Kenya Muslim Charitable Society', 'weekly',98498374674653,new Date(2021,4,7),"4867")
    
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
