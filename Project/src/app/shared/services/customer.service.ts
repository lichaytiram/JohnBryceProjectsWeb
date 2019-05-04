import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer, User } from '../models/Customer';
import { Router } from '@angular/router';
import { Purchase } from '../models/Purchase';
import { Coupon } from '../models/Coupon';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public my_name;

  public root = {
    customer: null,
    user: null,
    amount: null,
    purchases: null,
    coupon: null,
    max_price: null,
    category: null,
    all_coupons: null,
    one_coupon: null
  }

  constructor(private http: HttpClient, private router: Router) { }



  public get_customer_name(token: number): void {

    let observable = this.http.get(`http://localhost:8080/customers/name/0?token=${token}`);

    observable.subscribe(

      res => {

        this.my_name = res;


      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }

  public get_customer(token: number): void {

    let observable = this.http.get<Customer>(`http://localhost:8080/customers/0?token=${token}`);

    observable.subscribe(

      res => {

        this.root.customer = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }

  public get_user(token: number): void {

    let observable = this.http.get<User>(`http://localhost:8080/users/0?token=${token}`);

    observable.subscribe(

      res => {

        this.root.user = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }

  public get_amount(token: number): void {

    let observable = this.http.get<number>(`http://localhost:8080/purchases/customer/amount?customerId=0&token=${token}`);

    observable.subscribe(

      res => {

        this.root.amount = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }

  public get_customer_purchase(token: number): void {

    let observable = this.http.get<Purchase[]>(`http://localhost:8080/purchases/customer?customerId=0&token=${token}`);

    observable.subscribe(

      res => {

        this.root.purchases = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }

  public get_customer_coupons_by_customer_id(token: number): void {

    let observable = this.http.get<Coupon[]>(`http://localhost:8080/coupons/customer?customerId=0&token=${token}`);

    observable.subscribe(

      res => {

        this.root.coupon = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }

  public get_customer_coupons_by_category(category: string, token: number): void {

    let observable = this.http.get<Coupon[]>(`http://localhost:8080/coupons/customer/category?customerId=0&category=${category}&token=${token}`);

    observable.subscribe(

      res => {

        this.root.category = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }

  public get_customer_coupons_by_max_price(max_price: number, token: number): void {

    let observable = this.http.get<Coupon[]>(`http://localhost:8080/coupons/customer/price?customerId=0&maxPrice=${max_price}&token=${token}`);

    observable.subscribe(

      res => {

        this.root.max_price = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }

  public get_all_coupon(token: number): void {

    let observable = this.http.get<Coupon[]>(`http://localhost:8080/coupons?token=${token}`);

    observable.subscribe(

      res => {

        this.root.all_coupons = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }

  public get_coupon(coupon_id: number, token: number): void {

    let observable = this.http.get<Coupon>(`http://localhost:8080/coupons/${coupon_id}?token=${token}`);

    observable.subscribe(

      res => {

        this.root.one_coupon = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }

  public purchase_coupon(purchase: Purchase, token: number): void {

    let observable = this.http.post(`http://localhost:8080/purchases?token=${token}`, purchase);

    observable.subscribe(

      res => {

        alert("Your purchase has been done");

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }



  public delete_customer(token: number): void {

    let observable = this.http.delete(`http://localhost:8080/customers/0?token=${token}`);

    observable.subscribe(

      () => {

        alert("Your customer has been deleted");
        this.router.navigate(["/login"]);

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }

  public delete_purchase_by_id(purchase_id: number, token: number): void {

    let observable = this.http.delete(`http://localhost:8080/purchases/${purchase_id}?token=${token}`);

    observable.subscribe(

      () => {

        alert("Your purchase has been deleted");

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }

  public delete_purchase(coupon_id: number, token: number): void {

    let observable = this.http.delete(`http://localhost:8080/purchases/delete?customerId=0&couponId=${coupon_id}&token=${token}`);

    observable.subscribe(

      () => {

        alert("Your purchase has been deleted");

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }

  public update_customer(customer: Customer, token: number): void {

    let observable = this.http.put(`http://localhost:8080/customers?token=${token}`, customer);

    observable.subscribe(

      () => {

        alert("Your customer has been updated")

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ", Message: " + err.message)

    );

  }



}
