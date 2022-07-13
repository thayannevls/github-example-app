import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

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

  constructor(private userService: UserService, private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.tab = params['tab'];
    });

    this.userService.getMe().subscribe({
      next: (response) => this.user = response,
      error: (error) => {
        console.log('erro', error);
        if (error.status === 401) {
          this.authService.doLogout();
        }
      }
    });

    console.log(this.tab);
  }

}
