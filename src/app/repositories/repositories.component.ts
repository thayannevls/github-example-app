import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
  repos: any;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.service.getRepositories().subscribe(repos => this.repos = repos);
  }

}
