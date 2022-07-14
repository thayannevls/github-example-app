import { Component, Input, OnInit } from '@angular/core';
import { GithubApiService } from '../shared/github-api.service';
import { followersData } from './followers.data';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  followers: any;
  @Input('isGetFollowers') isGetFollowers = true;

  constructor(private githubApi: GithubApiService) { }

  ngOnInit(): void {
    if (this.isGetFollowers) {
      this.githubApi.getUserFollowers().subscribe(data => {
        this.followers = data
      })
    } else {
      this.githubApi.getUserFollows().subscribe(data => {
        this.followers = data
      })
    }
  }

}
