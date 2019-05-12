import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Company } from '../models/Company';
import { User } from '../models/User';
import { Customer } from '../models/Customer';
import { Purchase } from '../models/Purchase';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {

  public my_name: string;

  public root = {
    administrator: null,
    create_company: null,
    all_companies: null,
    all_customers: null,
    all_purchases: null,
    all_users: null
  }

  constructor(private http: HttpClient, private router: Router) { }

  public get_user_name(id: number, token: number): void {

    let observable = this.http.get<string>(`http://localhost:8080/users/name/${id}?token=${token}`);

    observable.subscribe(

      res => {

        this.my_name = res;


      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }


  public delete_my_user(user_id: number, token: number): void {

    let observable = this.http.delete(`http://localhost:8080/users/${user_id}?token=${token}`);

    observable.subscribe(

      () => {

        alert("Your user has been deleted");
        this.router.navigate(["/login"]);

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public delete_user(user_id: number, token: number): void {

    let observable = this.http.delete(`http://localhost:8080/users/${user_id}?token=${token}`);

    observable.subscribe(

      () => {

        alert("user has been deleted");

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public create_company(company: Company, token: number): void {

    let observable = this.http.post(`http://localhost:8080/companies?token=${token}`, company);

    observable.subscribe(

      () => {

        alert("company has been created");

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public delete_company(company_id: number, token: number): void {

    let observable = this.http.delete(`http://localhost:8080/companies/${company_id}?token=${token}`);

    observable.subscribe(

      () => {

        alert("company has been deleted");

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public update_user(user: User, token: number): void {

    let observable = this.http.put(`http://localhost:8080/users?token=${token}`, user);

    observable.subscribe(

      () => {

        alert("Your user has been updated");

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public update_company(company: Company, token: number): void {

    let observable = this.http.put(`http://localhost:8080/companies?token=${token}`, company);

    observable.subscribe(

      () => {

        alert("company has been updated");

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public create_user(user: User, token: number): void {

    let observable = this.http.post(`http://localhost:8080/users?token=${token}`, user);

    observable.subscribe(

      () => {

        alert("user has been created");

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public get_all_companies(token: number): void {

    let observable = this.http.get<Company[]>(`http://localhost:8080/companies?token=${token}`);

    observable.subscribe(

      res => {

        this.root.all_companies = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public get_all_customers(token: number): void {

    let observable = this.http.get<Customer[]>(`http://localhost:8080/customers?token=${token}`);

    observable.subscribe(

      res => {

        this.root.all_customers = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public get_all_purchases(token: number): void {

    let observable = this.http.get<Purchase[]>(`http://localhost:8080/purchases?token=${token}`);

    observable.subscribe(

      res => {

        this.root.all_purchases = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public get_all_users(token: number): void {

    let observable = this.http.get<User[]>(`http://localhost:8080/users?token=${token}`);

    observable.subscribe(

      res => {

        this.root.all_users = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }



}
