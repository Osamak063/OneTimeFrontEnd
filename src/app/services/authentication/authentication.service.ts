import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';
import { UserRequest, RegisterUser } from 'src/app/models/user/user-model';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private httpParams: HttpParams;
  constructor(private httpClient: HttpClient) {
    this.httpParams = new HttpParams();
  }

  login(username: string, password: string) {
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post("https://localhost:5001/api/Account/Login",
      { username, password }, { headers: header });
  }

  register(registerUser: RegisterUser) {
    const header = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post("https://localhost:5001/api/Account/Register",
      JSON.stringify(registerUser),
      { headers: header });
  }

  getAllRegistrationRequests() {
    return this.httpClient.get<UserRequest[]>("https://localhost:5001/api/Account/GetAllRegistrationRequests");
  }

  approveRegistration(id: number) {
    return this.httpClient.put(`https://localhost:5001/api/Account/ApproveRegistration/${id}`, null);
  }

  rejectRegistration(id: number) {
    return this.httpClient.put(`https://localhost:5001/api/Account/RejectRegistration/${id}`, null);
  }

  setSession(authResult) {
    localStorage.setItem('id_token', authResult.token);
    localStorage.setItem("expires_at", authResult.expires_at);
    localStorage.setItem('user', JSON.stringify(authResult.user));
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("user");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration()) && localStorage.getItem("id_token") ? true : false;
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    return moment(expiration);
  }

  getToken(){
    return localStorage.getItem("id_token");
  }

  getNameAndEmail(){
    const userName = JSON.parse(localStorage.getItem("user"))['userName'];
    const email = JSON.parse(localStorage.getItem("user"))['email'];
    return {userName,email};
  }

  getRole(){
    return JSON.parse(localStorage.getItem("user"))['role'];
  }

}
