import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class LoginServiceService {
private host: String = 'http://localhost:8080';
private jwtToken = null;
private roles: Array<any>;
  constructor(private http: HttpClient) { }

  login(user) {
    return this.http.post(this.host + '/login', user, {observe: 'response'});
  }

  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
    this.jwtToken = jwt;
    const jwtHelper = new JwtHelper();
   // this.roles = jwtHelper.decodeToken(this.jwtToken).roles;
  }
  loadToken() {
    this.jwtToken = localStorage.getItem('token');
  }

  getTasks() {
    if (this.jwtToken == null) { this.loadToken(); }
    return this.http.get(this.host + '/tasks',
      {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  logOut() {
    localStorage.removeItem('token');
    this.jwtToken = null;
  }

  isAdmin() {
  /* for (const r of this.roles) {
      if (r.authority === 'ADMIN') {
  return true;
      } else {
        return false;
      }
    }*/
  }

  saveTask(task) {
    if (this.jwtToken == null) { this.loadToken(); }
    console.log(this.jwtToken);
  return  this.http.post(this.host + '/addTasks', task,
    {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }
}
