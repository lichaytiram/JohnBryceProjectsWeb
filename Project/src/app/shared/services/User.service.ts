import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../models/LoginUser';
import { UserDataClient } from '../models/UserDataClient';
import { Router } from '@angular/router';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  // login

  public login(user: LoginUser): void {

    let observable = this.http.post<UserDataClient>("http://localhost:8080/users/login", user);

    observable.subscribe(

      res => {
        sessionStorage.setItem("token", res.token + "");

        if (res.clientType == "Customer")
          this.router.navigate(["login/customer"]);

        else if (res.clientType == "Company") {
          sessionStorage.setItem("company", res.companyId + "");
          this.router.navigate(["login/company"]);
        }

        else
          this.router.navigate(["login/administrator"]);

        sessionStorage.setItem("id", res.id + "");

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    )
  }

  // register

  public register(customer: Customer): void {

    let observable = this.http.post<number>("http://localhost:8080/customers/register", customer);

    observable.subscribe(
      res => {
        alert("your user has been created");
      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

}
