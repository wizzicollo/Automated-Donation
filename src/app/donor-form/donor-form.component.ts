import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Donor } from "../donor";

@Component({
  selector: 'app-donor-form',
  templateUrl: './donor-form.component.html',
  styleUrls: ['./donor-form.component.css']
})
export class DonorFormComponent implements OnInit {
newDonor = new Donor( 0,"","",0,new Date(),"");
@Output() addDonor = new EventEmitter<Donor>();
submitDonor(){
  this.addDonor.emit(this.newDonor);
}

  constructor() { }

  ngOnInit(): void {
  }

}
