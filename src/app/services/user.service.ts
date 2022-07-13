import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private USER_URL = 'https://api.github.com/user';

  constructor(private http: HttpClient, private authService: AuthService) { }

  getMe() {
    return this.http.get(this.USER_URL, {
      headers: {
        'Authorization': 'token ' + this.authService.getToken()
      }
    });
  }

  getRepositories() {
    return this.http.get(this.USER_URL + '/repos', {
      headers: {
        'Authorization': 'token ' + this.authService.getToken()
      }
    });
  }

  getFollowers() {
    return this.http.get(this.USER_URL + '/followers', {
      headers: {
        'Authorization': 'token ' + this.authService.getToken()
      }
    });
  }

  getFollowing() {
    return this.http.get(this.USER_URL + '/following', {
      headers: {
        'Authorization': 'token ' + this.authService.getToken()
      }
    })
  }
}
