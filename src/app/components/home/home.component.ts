import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Home } from 'src/app/classes/home';
import { Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newHome = new Home("","","",new Date());

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}


