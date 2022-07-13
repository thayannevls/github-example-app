import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessToken;

  constructor(private http: HttpClient, private router: Router) {
    this.accessToken = localStorage.getItem('token');
  }

  doLogin(token: string) {
    console.log(token);
    localStorage.setItem('token', token as string);
    this.accessToken = token as string;
  }


  isLoggedIn() {
    return Boolean(this.accessToken);
  }

  doLogout() {
    this.accessToken = '';
    localStorage.removeItem('token');
  }

  getToken() {
    return this.accessToken;
  }

}
