 
import { Component, OnInit } from '@angular/core';
import { DonaService } from '../dona.service';

@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css'],
  providers: [DonaService]
})
export class CharityComponent implements OnInit {

  charities = [{title: 'test'}];
  selectedCharity;

  constructor(private dona:DonaService) {
    this.getCharities();
    this.selectedCharity = {id:1, location: '' , target_amount: '', amount_raised: '',user:'' };
   }
   getCharities = () => {
    this.dona.getAllCharities().subscribe(
      data => {
        this.charities = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  charityClicked = (charity) => {
    this.dona.getOneCharity(charity.id).subscribe(
      data => {
        this.selectedCharity = data;

      },
      error => {
        console.log(error)
      }
    );
  }
  updateCharity = () => {
    this.dona.updateCharity(this.selectedCharity).subscribe(
       data => {
        this.getCharities();
      },
      error => {
        console.log(error);
      }
    );
  }
  createCharity = () => {
    this.dona.createCharity(this.selectedCharity).subscribe(
       data => {
        this.charities.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteCharity = () => {
    this.dona.deleteCharity(this.selectedCharity.id).subscribe(
      data => {
        this.getCharities();
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
  }

}