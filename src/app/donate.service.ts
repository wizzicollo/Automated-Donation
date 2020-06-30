import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonateService {

  baseurl = "http://127.0.0.1:8000/"
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private http: HttpClient) { }
  getdonor(): Observable<any> {
    return this.http.get(this.baseurl + 'api/donations/', { headers: this.httpHeaders })
  }
    
}
