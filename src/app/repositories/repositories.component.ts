import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../shared/github-api.service';
import { reposData } from './repos.data';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  repos: any;
  filteredRepos: any;

  constructor(private githubApi: GithubApiService) { }

  ngOnInit(): void {
    this.githubApi.getUserRepos().subscribe(data => {
      this.repos = data
      this.filteredRepos = data
    })
  }

  onSearchChange(event: HTMLInputElement) {
    this.filteredRepos = this.repos.filter((repo: any) => repo.name.toLowerCase().includes(event.value.toLowerCase()));
  }

}
