import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let currentUser = this.authenticationService.decodeToken();
    if (currentUser && currentUser) {
      request = request.clone(
        {
          setHeaders: {
            Authorization: `Token ${currentUser}`
          }
        }
      )
    }
    return next.handle(request);
  }
}

