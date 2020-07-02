import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as jwt_decode from 'jwt-decode';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token:Token
  constructor(public jwtHelper: JwtHelperService) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    
    return !this.jwtHelper.isTokenExpired(token);
  }
  decodeToken():Token{
    const token = localStorage.getItem('token');
    var decoded = jwt_decode(token)
    this.token = decoded
    return this.token
  }

}
