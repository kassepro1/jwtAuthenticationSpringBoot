import { Component, OnInit } from '@angular/core';
import {LoginServiceService} from '../service/login-service.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  constructor(private loginService: LoginServiceService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }
  onAddNewTask(task) {
    console.log(task);
this.loginService.saveTask(task);
  }

}
