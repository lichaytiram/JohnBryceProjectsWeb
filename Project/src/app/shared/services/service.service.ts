import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  public login(user_name: string, password: string) {

    this.http.get<string>(`http://localhost:8080/users/login?userName=${user_name}&password=${password}`)
      .subscribe(

        res => console.log("res: " + res),
        err => console.log("err: " + err)

      )
  }

  public register(user_name: string, password: string) {


  }

}
