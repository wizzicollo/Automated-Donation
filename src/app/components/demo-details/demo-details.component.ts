import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-demo-details',
  templateUrl: './demo-details.component.html',
  styleUrls: ['./demo-details.component.css']
})
export class DemoDetailsComponent implements OnInit {
  currentDemo= null;
  message = '';


  constructor(
    private demoService: DemoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getDemo(this.route.snapshot.paramMap.get('id'));
  }
  getDemo(id) {
    this.demoService.get(id)
      .subscribe(
        data => {
          this.currentDemo = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updatePublished(status) {
    const data = {
      location: this.currentDemo.location,
      target_amount: this.currentDemo.target_amount,
      amount_raised: this.currentDemo.amount_raised,
      user: this.currentDemo.user,
      published: status
    };

    this.demoService.update(this.currentDemo.id, data)
      .subscribe(
        response => {
          this.currentDemo.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  updateDemo() {
    this.demoService.update(this.currentDemo.id, this.currentDemo)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The tutorial was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
  deleteDemo() {
    this.demoService.delete(this.currentDemo.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/demo']);
        },
        error => {
          console.log(error);
        });
  }

}
