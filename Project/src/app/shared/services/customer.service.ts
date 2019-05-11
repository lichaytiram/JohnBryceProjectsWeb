import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Customer } from '../models/Customer';
import { Router } from '@angular/router';
import { Purchase } from '../models/Purchase';
import { Coupon } from '../models/Coupon';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public my_name: string;
  public id: number;

  public root = {
    customer: null,
    user: null,
    amount: null,
    purchases: null,
    coupon: null,
    max_price: null,
    category: null,
    all_coupons: null
    // one_coupon: null
  }

  constructor(private http: HttpClient, private router: Router) { }

  public get_customer_name(customer_id: number, token: number): void {

    let observable = this.http.get<string>(`http://localhost:8080/customers/name/${customer_id}?token=${token}`);

    observable.subscribe(

      res => {

        this.my_name = res;


      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public get_customer(customer_id: number, token: number): void {

    let observable = this.http.get<Customer>(`http://localhost:8080/customers/${customer_id}?token=${token}`);

    observable.subscribe(

      res => {

        this.root.customer = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public get_user(customer_id: number, token: number): void {

    let observable = this.http.get<User>(`http://localhost:8080/users/${customer_id}?token=${token}`);

    observable.subscribe(

      res => {

        this.root.user = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public get_amount(customer_id: number, token: number): void {

    let observable = this.http.get<number>(`http://localhost:8080/purchases/customer/amount?customerId=${customer_id}&token=${token}`);

    observable.subscribe(

      res => {

        this.root.amount = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public get_customer_purchase(customer_id: number, token: number): void {

    let observable = this.http.get<Purchase[]>(`http://localhost:8080/purchases/customer?customerId=${customer_id}&token=${token}`);

    observable.subscribe(

      res => {

        this.root.purchases = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public get_customer_coupons_by_customer_id(customer_id: number, token: number): void {

    let observable = this.http.get<Coupon[]>(`http://localhost:8080/coupons/customer?customerId=${customer_id}&token=${token}`);

    observable.subscribe(

      res => {

        this.root.coupon = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public get_customer_coupons_by_category(customer_id: number, category: string, token: number): void {

    let observable = this.http.get<Coupon[]>(`http://localhost:8080/coupons/customer/category?customerId=${customer_id}&category=${category}&token=${token}`);

    observable.subscribe(

      res => {

        this.root.category = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public get_customer_coupons_by_max_price(customer_id: number, max_price: number, token: number): void {

    let observable = this.http.get<Coupon[]>(`http://localhost:8080/coupons/customer/price?customerId=${customer_id}&maxPrice=${max_price}&token=${token}`);

    observable.subscribe(

      res => {

        this.root.max_price = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public get_all_coupon(token: number): void {

    let observable = this.http.get<Coupon[]>(`http://localhost:8080/coupons?token=${token}`);

    observable.subscribe(

      res => {

        this.root.all_coupons = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  // public get_coupon(coupon_id: number, token: number): void {

  //   let observable = this.http.get<Coupon>(`http://localhost:8080/coupons/${coupon_id}?token=${token}`);

  //   observable.subscribe(

  //     res => {

  //       this.root.one_coupon = res;

  //     },
  //     err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

  //   );

  // }

  public purchase_coupon(purchase: Purchase, token: number): void {

    let observable = this.http.post(`http://localhost:8080/purchases?token=${token}`, purchase);

    observable.subscribe(

      res => {

        alert("Your purchase has been done");

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }



  public delete_customer(customer_id: number, token: number): void {

    let observable = this.http.delete(`http://localhost:8080/customers/${customer_id}?token=${token}`);

    observable.subscribe(

      () => {

        alert("Your customer has been deleted");
        this.router.navigate(["/login"]);

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public delete_purchase_by_id(purchase_id: number, token: number): void {

    let observable = this.http.delete(`http://localhost:8080/purchases/${purchase_id}?token=${token}`);

    observable.subscribe(

      () => {

        alert("Your purchase has been deleted");

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  // public delete_purchase(customer_id: number, coupon_id: number, token: number): void {

  //   let observable = this.http.delete(`http://localhost:8080/purchases/delete?customerId=${customer_id}&couponId=${coupon_id}&token=${token}`);

  //   observable.subscribe(

  //     () => {

  //       alert("Your purchase has been deleted");

  //     },
  //     err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

  //   );

  // }

  public update_customer(customer: Customer, token: number): void {

    let observable = this.http.put(`http://localhost:8080/customers?token=${token}`, customer);

    observable.subscribe(

      () => {

        alert("Your customer has been updated")

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }



}
