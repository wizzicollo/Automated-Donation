import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfilesService {
  constructor (
    private http: HttpClient
  ) {}

  get(){
    const username = localStorage.getItem('username')
    console.log(username)

    return this.http.get(`${environment.API_URL}/profiles/${username}`)
    
  }
}