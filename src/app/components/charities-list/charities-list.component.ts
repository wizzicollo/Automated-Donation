import { CharityService } from './../../services/charity.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charities-list',
  templateUrl: './charities-list.component.html',
  styleUrls: ['./charities-list.component.css']
})
export class CharitiesListComponent implements OnInit {

  charities: any;
  currentCharity = null;
  currentIndex = -1;
  name = '';

  constructor(private charityService: CharityService) { }

  ngOnInit() {

    this.retrieveCharities();
  }

  retrieveCharities() {
    this.charityService.getAll()
      .subscribe(
        data => {
          this.charities = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveCharities();
    this.currentCharity = null;
    this.currentIndex = -1;
  }

  setActiveCharity(charity, index) {
    this.currentCharity = charity;
    this.currentIndex = index;
  }

  removeAllCharities() {
    this.charityService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveCharities();
        },
        error => {
          console.log(error);
        });
  }

  searchName() {
    this.charityService.findByName(this.name)
      .subscribe(
        data => {
          this.charities = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}

