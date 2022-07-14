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

  forked(repos: Repository[], forked: boolean | string | null) {
    if (forked == null || forked === '') {
      return repos
    }
    return repos.filter((repo: any) => repo.fork == forked)
  }

  hasOpenIssues(repos: Repository[], hasOpenIssues: boolean | string | null) {
    if (hasOpenIssues == null || hasOpenIssues === '') {
      return repos
    }
    return repos.filter((repo: Repository) => (hasOpenIssues && repo.open_issues) || (!hasOpenIssues  && !repo.open_issues))
  }

  compareByAttribute(repoA: Repository, repoB: Repository, attr: keyof Repository, order: 'asc' | 'desc') {
    if (!attr) {
      return 0
    }
    if (order == 'asc') {
      //@ts-ignore
      return repoA[attr]?.toString().toLowerCase() > repoB[attr].toString().toLowerCase() ? 1 : -1
    }
    if (order == 'desc') {
      //@ts-ignore
      return repoA[attr].toString().toLowerCase() > repoB[attr].toString().toLowerCase() ? -1 : 1
    }
    return 0
  }

  handleFilters(filters: any) {
    const {isForked, hasOpenIssues, search, orderBy} = filters
    const repositories = this.repos

    const filteredBySearch = repositories.filter((repo: Repository) => repo.name.toLowerCase().includes(search.toLowerCase()));
    const filteredByForked = this.forked(filteredBySearch, isForked)
    const filteredByHasOpenIssues = this.hasOpenIssues(filteredByForked, hasOpenIssues)


    this.filteredRepos = orderBy ? filteredByHasOpenIssues.sort((repoA:Repository, repoB:Repository) => this.compareByAttribute(repoA, repoB, orderBy.attr, orderBy.order)) : filteredByHasOpenIssues

    this.calculateTotalOpenIssues();
  }

  calculateTotalOpenIssues() {
    this.totalOpenIssues = this.filteredRepos.reduce((accumulated: number, currentRepo: Repository) => {
      return currentRepo.open_issues + accumulated
    }, 0);
  }

}
