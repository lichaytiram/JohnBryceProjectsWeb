import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/Customer';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public root = {
    customer: null
  }

  constructor(private http: HttpClient, private router: Router) { }

  public getCustomer(id: number, token: number) {

    let observable = this.http.get<Customer>(`http://localhost:8080/customers/${id}?token=${token}`);

    observable.subscribe(

      res => {

        this.root.customer = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }
  public deleteCustomer(token: number): void {

    let observable = this.http.delete(`http://localhost:8080/customers/0?token=${token}`);

    observable.subscribe(

      () => {

        alert("Your customer has been deleted");
        this.router.navigate(["/login"]);

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }
}
