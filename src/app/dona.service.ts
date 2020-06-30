import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonaService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })


  constructor(private http: HttpClient) { }
  getAllCharities(): Observable<any> {
    return this.http.get(this.baseurl + '/api/charity/',
      { headers: this.httpHeaders });
  }
  getOneCharity(id): Observable<any> {
    return this.http.get(this.baseurl + '/api/charity/' + id + '/',
      { headers: this.httpHeaders });
  }
  updateCharity(charity): Observable<any> {
    const body = { location: charity.location, target_amount: charity.target_amount, amount_raised: charity.amount_raised, user: charity.user };
    return this.http.put(this.baseurl + '/api/charity/' + charity.id + '/', body,
      { headers: this.httpHeaders });
  }
  createCharity(charity): Observable<any> {
    const body = { location: charity.location, target_amount: charity.target_amount, amount_raised: charity.amount_raised, user: charity.user };
    return this.http.post(this.baseurl + '/api/charity/', body,
      { headers: this.httpHeaders })
  }
  deleteCharity(id): Observable<any> {
    return this.http.delete(this.baseurl + '/api/charity/' + id + '/',
      { headers: this.httpHeaders });
  }
}
