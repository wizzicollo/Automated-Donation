import { Component } from '@angular/core';
import { DonateService } from './donate.service';
import { Donor } from './donor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Automated-Donations';

  constructor(private _DonateService: DonateService) {
    
  }

  donor: Donor[];

  ngOnInit() {
    this._DonateService.getdonor()
    .subscribe
    (
      data=>
      {
        this.donor = data;
      }
    );
  }
}

