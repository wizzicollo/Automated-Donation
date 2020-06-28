// import { Component, OnInit } from '@angular/core';
// import { RegService } from './reg.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css'],
//   providers: [RegService]
// })
// export class RegisterComponent implements OnInit {
//   register;
//   submitted = false;

//   constructor(private regService:RegService) { }

//   ngOnInit() {
//     this.register = {
//       first_name : '',
//       last_name : '',
//       username : '',
//       password: '',
//       email: ''
//     };
//   }

//   registerUser(){
//     this,this.regService.registerNewUser(this.register).subscribe(
//       response => {
//         alert ('User ' + this.register.username + ' has been created!')
//       },
//       error => alert('Kindly input required fields.')
//     );
//   }
// }



