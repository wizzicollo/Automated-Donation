import { Component, OnInit } from '@angular/core';
import { Home } from 'src/app/classes/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newHome = new Home("","","",new Date());

  constructor() { }

  ngOnInit(): void {
  }

}
