import { Component, Input, OnInit } from '@angular/core';
import { followersData } from './followers.data';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  followers: any;
  @Input('isGetFollowers') isGetFollowers = true;

  constructor() { }

  ngOnInit(): void {
    this.followers = followersData;
  }

}
