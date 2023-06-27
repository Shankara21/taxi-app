import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private dev = 'http://localhost:3000';

  constructor(private HttpClient: HttpClient, private cookieService: CookieService, @Inject(DOCUMENT) private document: Document) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Login
  Login(data: any) {
    return this.HttpClient.post(this.dev + '/users/login', data);
  }
  // Register
  Register(data: any) {
    return this.HttpClient.post(this.dev + '/users/register', data);
  }

  // SetToken
  SetToken(token: string) {
    this.cookieService.delete('TaxiApps');
    this.cookieService.set('TaxiApps', token, 8 / 24);
  }
  // GetToken
  GetToken() {
    return this.cookieService.get('TaxiApps');
  }

  // Refresh Token
  RefreshToken() {
    this.cookieService.set('TaxiApps', this.GetToken(), 8 / 24);
  }

  // DeleteToken
  DeleteToken() {
    this.cookieService.delete('TaxiApps');
  }

  // GetPayload
  GetPayload() {
    const token = this.GetToken();
    if (token) {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } else {
      return null;
    }
  }

  // Error handling
  errorHttpHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error ${error.error.message}`
    }
    else {
      errorMessage = `Error code : ${error.status}\n${error.message}`
    }
    return throwError(errorMessage)
  }
}
