import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../shared/github-api.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})

export class RepositoriesComponent implements OnInit {
  repos: any;
  filteredRepos: any;
  totalOpenIssues: any;

  constructor(private githubApi: GithubApiService) { }

  ngOnInit(): void {
    this.githubApi.getUserRepos().subscribe(data => {
      this.repos = data
      this.filteredRepos = data
      this.calculateTotalOpenIssues()
    })
  }

  forked(repos: any, forked: any) {
    if (forked === '') {
      return repos
    }
    return repos.filter((repo: any) => repo.fork == forked)
  }

  hasOpenIssues(repos: any, hasOpenIssues: any) {
    if (hasOpenIssues === '') {
      return repos
    }
    return repos.filter((repo: any) => (hasOpenIssues && repo.open_issues) || (!hasOpenIssues  && !repo.open_issues))
  }

  compareByAttribute(repoA: any, repoB: any, attr: string, order: 'asc' | 'desc') {
    if (order == 'asc') {
      return repoA[attr] > repoB[attr] ? 1 : -1
    }
    return repoA[attr] > repoB[attr] ? -1 : 1
  }

  handleFilters(filters: any) {
    const {isForked, hasOpenIssues, search, orderBy} = filters

    const repositories = this.repos

    const filteredBySearch = repositories.filter((repo: any) => repo.name.toLowerCase().includes(search.toLowerCase()));
    const filteredByForked = this.forked(filteredBySearch, isForked)
    const filteredByHasOpenIssues = this.hasOpenIssues(filteredByForked, hasOpenIssues)


    this.filteredRepos = orderBy ? filteredByHasOpenIssues.sort((repoA:any, repoB:any) => this.compareByAttribute(repoA, repoB, orderBy.Attr, orderBy.order)) : filteredByHasOpenIssues

    console.log(filters)
    this.calculateTotalOpenIssues();
  }

  calculateTotalOpenIssues() {
    this.totalOpenIssues = this.filteredRepos.reduce((accumulated: any, currentRepo: any) => {
      return currentRepo.open_issues + accumulated
    }, 0);
  }

}
