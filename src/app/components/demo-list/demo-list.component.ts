import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/services/demo.service';

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.css']
})
export class DemoListComponent implements OnInit {

  demo: any;
  currentDemo = null;
  currentIndex = -1;
  location = '';
  demos: any;


  constructor(private demoService: DemoService) { }

  ngOnInit(): void {
    this.retrieveDemo();
  }

  retrieveDemo() {
    this.demoService.getAll()
      .subscribe(
        data => {
          this.demo = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList() {
    this.retrieveDemo();
    this.currentDemo = null;
    this.currentIndex = -1;
  }
  setActiveDemo(demo, index) {
    this.currentDemo = demo;
    this.currentIndex = index;
  }
  removeAllDemos() {
    this.demoService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveDemo();
        },
        error => {
          console.log(error);
        });
  }
  searchLocation() {
    this.demoService.findByLocation(this.location)
      .subscribe(
        data => {
          this.demos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
