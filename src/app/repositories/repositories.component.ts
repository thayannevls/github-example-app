import { Component, OnInit } from '@angular/core';
import { reposData } from './repos.data';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  repos: any;
  filteredRepos: any;

  constructor() { }

  ngOnInit(): void {
    this.repos = reposData;
    this.filteredRepos = this.repos;
  }

  onSearchChange(event: HTMLInputElement) {
    this.filteredRepos = this.repos.filter((repo: any) => repo.name.toLowerCase().includes(event.value.toLowerCase()));
  }

}
