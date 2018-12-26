import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../service/login-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 mode = 0;
  constructor(private loginService: LoginServiceService, private  router: Router) { }

  ngOnInit() {
  }

  onLogin(user) {
this.loginService.login(user).subscribe(resp => {
const jwt = resp.headers.get('Authorization');
this.loginService.saveToken(jwt);
this.router.navigateByUrl('/tasks');
  },
  error1 => {
this.mode = 1;
  })  ;
  }

}
