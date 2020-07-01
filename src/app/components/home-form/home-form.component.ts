import { Component, OnInit } from '@angular/core';
import { Home } from 'src/app/classes/home'

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {

  constructor() { }
  model = new Home("","","",new Date());
  ngOnInit(): void {
  }

}
