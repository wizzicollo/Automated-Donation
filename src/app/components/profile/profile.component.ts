import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile, ProfilesService } from 'src/app/core';
import { ProfileDetail } from 'src/app/core/models/profile-detail';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  form: FormGroup

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfilesService,
    public formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      username: [''],
      email: [''],
      bio: [''],
      image: [null],
    })
  }

  profile: ProfileDetail;
  isUser: boolean;
  getProfile() {
    this.profileService.get().subscribe(result => {
      this.profile = result

    })
  }

  submitForm() {
    let formData = new FormData();
    formData.append('bio', this.form.get('bio').value)
    formData.append('email', this.form.get('email').value)
    formData.append('username', this.form.get('username').value)
    formData.append('image', this.form.get('image').value)
    this.profileService.update(formData)
      .subscribe(
        data => {
          this.getProfile()
          this.form.reset()
        }, error => {
          console.log(error)
        }
      )
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      image: file
    });
    this.form.get('image').updateValueAndValidity()
  }


  ngOnInit() {
    this.getProfile()
  }

}