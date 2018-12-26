import { Component } from '@angular/core';
import {LoginServiceService} from './service/login-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
constructor(private loginService: LoginServiceService, private router: Router) {}
  onLogout() {
this.loginService.logOut();
this.router.navigateByUrl('/login');
  }
}
