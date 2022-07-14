import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { reposData } from './repos.data';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  repos: any;
  filteredRepos: any;
  totalOpenIssues: any;

  constructor() { }

  ngOnInit(): void {
    this.repos = reposData;
    this.filteredRepos = this.repos;
    this.calculateTotalOpenIssues();
  }

  onFormChange(f: NgForm) {
    let result = [...this.repos];
    const { forked, openIssues, order, search } = f.value;

    result = result.filter((repo: any) => repo.name.toLowerCase().includes(search.toLowerCase()));

    const compareAlphabeticOrder = (repoA: any, repoB: any): number => {
      return repoA.name.localeCompare(repoB.name);
    }

    const compareNumber = (property : string) => {
      return (repoA: any, repoB: any): number => {
        return repoA[property] > repoB[property] ? 1 : -1;
      }
    }

    forked === "1" ?
      result = result.filter((repo: any) => repo.fork)
    : 
      forked === "2" ?
        result = result.filter((repo: any) => !repo.fork)
      :
        null;

    openIssues === "1" ?
      result = result.filter((repo: any) => repo.open_issues)
    :
      openIssues === "2" ?
        result = result.filter((repo: any) => !repo.open_issues)
      :
        null;

    order === "1" ?
      result.sort(compareAlphabeticOrder)
    : order === "2" ?
        result.sort(compareAlphabeticOrder).reverse()
      : order === "3" ?
          result.sort(compareNumber("open_issues"))
        : order === "4" ?
            result.sort(compareNumber("open_issues")).reverse()
          : order === "5" ?
              result.sort(compareNumber("stargazers_count"))
            : order === "6" ?
                result.sort(compareNumber("stargazers_count")).reverse()
              :
                null;
                    
    this.filteredRepos = result;
    this.calculateTotalOpenIssues();
  }

  calculateTotalOpenIssues() {
    this.totalOpenIssues = this.filteredRepos.reduce((accumulated: any, currentRepo: any) => {
      return currentRepo.open_issues + accumulated
    }, 0);
  }

}
