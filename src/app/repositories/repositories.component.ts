import { Component, OnInit } from '@angular/core';
import { reposData } from './repos.data';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  repos: any;

  constructor() { }

  ngOnInit(): void {
    this.repos = reposData;
  }

}
