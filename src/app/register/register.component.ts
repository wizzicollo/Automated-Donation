import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';
import { UsermanagerService } from '../usermanager.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private usermanger: UsermanagerService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      is_charity: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    console.log('submitted value', this.registerForm.value);
    // This is the time for integrete the register
    const first_name = this.registerForm.value.first_name;
    const last_name = this.registerForm.value.username;
    const username = this.registerForm.value.username;
    const email = this.registerForm.value.email;
    const is_charity = this.registerForm.value.is_charity;
    const password = this.registerForm.value.password;
    const password2 = this.registerForm.value.password2;

    this.usermanger.register(first_name,last_name,username,email,password, password2, is_charity).subscribe(
      result => {
        // Here we are storing the token and refresh token in the localstorage

        console.log(result)

        localStorage.setItem('token', result['token']);
        localStorage.setItem('refresh', result['refresh']);
        this.router.navigate(['/login']);
      },

      error => {
        console.log('error');
      }
    );

  }
}
