import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../models/LoginUser';
import { UserDataClient } from '../models/UserDataClient';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { Name } from '../models/Name';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public login(user: LoginUser): Observable<UserDataClient> {

    return this.http.post<UserDataClient>("http://localhost:8080/users/login/unsecured", user);

  }

  public logOut(token: number): Observable<any> {

    return this.http.get(`http://localhost:8080/users/logout?token=${token}`);

  }

  public createUser(user: User, token: number): Observable<any> {

    return this.http.post(`http://localhost:8080/users?token=${token}`, user);

  }

  public updateUser(user: User, token: number): Observable<any> {

    return this.http.put(`http://localhost:8080/users?token=${token}`, user);

  }

  public deleteMyUser(userId: number, token: number): Observable<any> {

    return this.http.delete(`http://localhost:8080/users/${userId}?token=${token}`);

  }

  public deleteUser(userId: number, token: number): Observable<any> {

    return this.http.delete(`http://localhost:8080/users/${userId}?token=${token}`);

  }

  public getUserName(userId: number, token: number): Observable<Name> {

    return this.http.get<Name>(`http://localhost:8080/users/name/${userId}?token=${token}`);

  }

  public getUser(userId: number, token: number): Observable<User> {

    return this.http.get<User>(`http://localhost:8080/users/${userId}?token=${token}`);

  }

  public getAllUsers(token: number): Observable<User[]> {

    return this.http.get<User[]>(`http://localhost:8080/users?token=${token}`);

  }

}
