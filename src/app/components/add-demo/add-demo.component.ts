import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-add-demo',
  templateUrl: './add-demo.component.html',
  styleUrls: ['./add-demo.component.css']
})
export class AddDemoComponent implements OnInit {

  demo = {
    location: '',
    target_amount: '',
    amount_raised: '',
    user: '',

    published: false
  };
  submitted = false;


  constructor(private demoService: DemoService) { }

  ngOnInit(): void {
  }
  saveDemo() {
    const data = {
      location: this.demo.location,
      target_amount: this.demo.target_amount
    };

    this.demoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newDemo() {
    this.submitted = false;
    this.demo = {
      location: '',
      target_amount: '',
      amount_raised: '',
      user: '',
      published: false
    };
  }
}


