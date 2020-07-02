import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Profile } from '../models';
import { map, catchError } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileDetail } from '../models/profile-detail';
import { Token } from 'src/app/models/token';
@Injectable()
export class ProfilesService {
  private token:Token
  constructor (
    private http: HttpClient,
    private authService:AuthService
  ) {}

  get(){
    this.getDecoded()
    return this.http.get(`${environment.API_URL}/profiles/${this.token['id']}`).pipe(
      map((data:ProfileDetail)=>{
        data.image = environment.CLOUDINARY+ data.image
        return data
      }),catchError(error=>{
        return throwError('Something went wrong')
      })
    )
  }



  update(formData){
    this.getDecoded()
    return this.http.put(`${environment.API_URL}/profiles/${this.token['id']}`, formData).pipe(
      map((data:ProfileDetail)=>{
        data.image = environment.CLOUDINARY+ data.image
        return data
      }),catchError(error=>{
        return throwError('Something went wrong')
      })
    )
  }

  getDecoded(){
  this.token=this.authService.decodeToken()
  }
}
