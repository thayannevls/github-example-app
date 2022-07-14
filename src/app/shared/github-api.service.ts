import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators'

interface Repository {
  name: string,
  description?: string,
  visibility: 'publish' | 'private',
  html_url: string
}

@Injectable({
  providedIn: 'root'
})

export class GithubApiService {

  apiURL = 'https://api.github.com'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // add github token
      authorization: 'token <GITHUB_TOKEN>'
    }),
  };

  constructor(private http: HttpClient) { }

  getUserRepos(): Observable<Repository> {
    return this.http.get<Repository>(
      this.apiURL + '/user/repos',
      this.httpOptions
    ).pipe(retry(1), catchError(this.handleError))
  }

  getUserFollowers(): Observable<Repository> {
    return this.http.get<Repository>(
      this.apiURL + '/user/followers',
      this.httpOptions
    ).pipe(retry(1), catchError(this.handleError))
  }

  getUserFollows(): Observable<Repository> {
    return this.http.get<Repository>(
      this.apiURL + '/user/following',
      this.httpOptions
    ).pipe(retry(1), catchError(this.handleError))
  }

  getUser(): Observable<Repository> {
    return this.http.get<Repository>(
      this.apiURL + '/user',
      this.httpOptions
    ).pipe(retry(1), catchError(this.handleError))
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
