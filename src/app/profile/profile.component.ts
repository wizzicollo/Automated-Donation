import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile, ProfilesService } from '../core';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private profileService: ProfilesService
  ) { }

  profile: Profile;
  isUser: boolean;
  getProfile(){
    this.profileService.get().subscribe(result=>{
      console.log(result)
      
    })
  }  
  
  ngOnInit(){
    this.getProfile()
  }

}