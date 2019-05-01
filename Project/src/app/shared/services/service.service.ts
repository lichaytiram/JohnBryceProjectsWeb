import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { UserDataClient } from '../models/UserDataClient';
import { Router } from '@angular/router';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  // login

  public login(user: User) {

    let observable = this.http.post<UserDataClient>("http://localhost:8080/users/login", user);

    observable.subscribe(

      res => {

        console.log("res: " + res.clientType)
        if (res.clientType == "Customer")
          this.router.navigate(["/customer"]);

        else if (res.clientType == "Company")
          this.router.navigate(["/company"]);

        else
          this.router.navigate(["/administrator"]);

        sessionStorage.setItem("token", res.token + "");

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    )
  }

  // register

  public register(customer: Customer): void {

    let observable = this.http.post<number>("http://localhost:8080/customers/register", customer);

    observable.subscribe(
      res => {
        alert("your user has been created")
        this.router.navigate(["/login"]);

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }

  // customer

  public getCustomer(id: number, token: number) {
    console.log(id);

    let observable = this.http.get(`http://localhost:8080/customers/${id}?token=${token}`);

    observable.subscribe(

      res => {

        console.log(res);
        console.log(JSON.stringify(res));

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }

  // company

  // administrator


}
