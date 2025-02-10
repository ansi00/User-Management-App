import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  onLogin(obj: any) {
    return this.http.post(
      'https://projectapi.gerasim.in/api/UserApp/login',
      obj
    );
  }

  getUsers() {
    return this.http.get(
      'https://projectapi.gerasim.in/api/UserApp/GetAllUsers'
    );
  }

  CreateNewUser(obj: any) {
    return this.http.post(
      'https://projectapi.gerasim.in/api/UserApp/CreateUser',
      obj
    );
  }

  deleteUserById(userId: number) {
    return this.http.delete(
      'https://projectapi.gerasim.in/api/UserApp/DeleteUserById?id=' + userId
    );
  }

  GetUserById(id: number) {
    return this.http.get(
      'https://projectapi.gerasim.in/api/UserApp/GetUserById?id=' + id
    );
  }

  UpdateUser(obj: any) {
    return this.http.put(
      'https://projectapi.gerasim.in/api/UserApp/updateUser',
      obj
    );
  }
}
