import { CharityService } from './../../services/charity.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-charity-details',
  templateUrl: './charity-details.component.html',
  styleUrls: ['./charity-details.component.css']
})
export class CharityDetailsComponent implements OnInit {

currentCharity = null;
message = '';

  constructor(
    private charityService: CharityService,
    private route: ActivatedRoute,
    private router: Router) {}


  ngOnInit() {
    this.message = '';
    this.getCharity(this.route.snapshot.paramMap.get('id'));
  }

  getCharity(id) {
    this.charityService.get(id)
      .subscribe(
        data => {
          this.currentCharity = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status) {
    const data = {
      title: this.currentCharity.title,
      description: this.currentCharity.description,
      published: status
    };

    this.charityService.update(this.currentCharity.id, data)
      .subscribe(
        response => {
          this.currentCharity.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateCharity() {
    this.charityService.update(this.currentCharity.id, this.currentCharity)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The charity was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteCharity() {
    this.charityService.delete(this.currentCharity.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/charities']);
        },
        error => {
          console.log(error);
        });
  }
}
