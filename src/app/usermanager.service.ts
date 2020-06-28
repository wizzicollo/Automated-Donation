import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsermanagerService {


  login_url = 'http://127.0.0.1:8000/api/login/';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };


  constructor(private http: HttpClient) { }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      alert(error.error.non_field_errors);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  // The authenticate is the function for call the django backedn server for
  // login function
  authenticate(username: string, password: string) {
    const data = { 'username': username, 'password': password };
    return this.http.post(this.login_url, data, this.options)
      .pipe(
        catchError(this.handleError)
      );
  }
}

