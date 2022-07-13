import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userData } from './user-profile.data';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: any;
  tab: any;
  tabs = [
    {
      name: 'dados',
      description: 'Dados pessoais'
    },
    {
      name: 'repos',
      description: 'Repositórios'
    },
    {
      name: 'seguidores',
      description: 'Seguidores'
    },
    {
      name: 'seguindo',
      description: 'Seguindo'
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tab = params['tab'];
    });

    this.user = userData;

    console.log(this.tab);
  }

}
