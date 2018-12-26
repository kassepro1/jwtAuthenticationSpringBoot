import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../service/login-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
public tasks;
  constructor(public loginService: LoginServiceService, private router: Router) { }

  ngOnInit() {
    return this.loginService.getTasks().subscribe(
     data => {
this.tasks = data;
     }, error => {
       this.loginService.logOut();
 this.router.navigateByUrl('/login');
      }

    );
  }
  onNewTask() {
    this.router.navigateByUrl('/new-task');
  }
}
