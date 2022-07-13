import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.scss']
})
export class FollowersComponent implements OnInit {
  followers: any;
  @Input('isGetFollowers') isGetFollowers = true;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.isGetFollowers ?
      this.service.getFollowers().subscribe(followers => this.followers = followers)
    :
      this.service.getFollowing().subscribe(followers => this.followers = followers);
  }

}
