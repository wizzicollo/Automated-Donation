import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Donor } from '../donor';

@Component({
  selector: 'app-donor-details',
  templateUrl: './donor-details.component.html',
  styleUrls: ['./donor-details.component.css']
})
export class DonorDetailsComponent implements OnInit {

  @Input() donor :Donor;
  @Output() isComplete = new EventEmitter<boolean>();
  donorDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
