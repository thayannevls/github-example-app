import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private service: AuthService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const token = this.route.snapshot.queryParams['token'];
    console.log('token', token);
    this.service.doLogin(token);
    this.router.navigate(['']);
  }

}
