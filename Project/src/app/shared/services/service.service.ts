import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { UserDataClient } from '../models/UserDataClient';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  public login(user: User) {

    let observable = this.http.post<UserDataClient>("http://localhost:8080/users/login", user);

    observable.subscribe(

      res => {

        console.log("res: " + res.clientType)
        if (res.clientType == "Customer")
          this.router.navigate(["/customer"]);

        if (res.clientType == "Company")
          this.router.navigate(["/company"]);

        if (res.clientType == "Administrator")
          this.router.navigate(["/administrator"]);

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    )
  }

  public register(user_name: string, password: string) {


  }

}
