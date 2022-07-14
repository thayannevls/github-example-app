import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubApiService } from '../shared/github-api.service';

@Component({
  selector: 'app-repository-create',
  templateUrl: './repository-create.component.html',
  styleUrls: ['./repository-create.component.scss']
})
export class RepositoryCreateComponent implements OnInit {
  @Input name = ''

  constructor(private router: Router, private githubApi: GithubApiService) { }

  ngOnInit(): void {
  }

  createRepo() {
    console.log(this.name)
  }

}
