import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public user: any = {
    selected: null
  }

  constructor(private http: HttpClient) { }

  public get(id: number) {
    this.http.get(`https://reqres.in/api/users?page=${id}`)
      .subscribe(
        res => this.user.selected = res,
        err => console.log(err)
      )
  }
}
