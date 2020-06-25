import { Component, OnInit, Input } from '@angular/core';
import { Home } from '../home';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  constructor() { }

  @Input() home: Home;
  ngOnInit(): void {
  }

}
