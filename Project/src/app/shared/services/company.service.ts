import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Company } from '../models/Company';
import { Coupon } from '../models/Coupon';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  public my_name: string;

  public root = {
    company: null,
    user: null,
    coupons_by_id: null,
    coupons_by_category: null,
    coupons_by_max_price: null
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

  public get_company(id: number, token: number): void {

    let observable = this.http.get<Company>(`http://localhost:8080/companies/${id}?token=${token}`);

    observable.subscribe(

      res => {

        this.root.company = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public get_user(id: number, token: number): void {

    let observable = this.http.get<Company>(`http://localhost:8080/users/${id}?token=${token}`);

    observable.subscribe(

      res => {

        this.root.user = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public create_coupon(coupon: Coupon, token: number): void {

    let observable = this.http.post(`http://localhost:8080/coupons?token=${token}`, coupon);

    observable.subscribe(

      () => {

        alert("Your coupon has been created");

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public get_company_coupons_by_company_id(company_id: number, token: number): void {

    let observable = this.http.get<Coupon[]>(`http://localhost:8080/coupons/company?companyId=${company_id}&token=${token}`);

    observable.subscribe(

      res => {

        this.root.coupons_by_id = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }
  public get_company_coupons_by_category(company_id: number, category: string, token: number): void {

    let observable = this.http.get<Coupon[]>(`http://localhost:8080/coupons/company/category?companyId=${company_id}&category=${category}&token=${token}`);

    observable.subscribe(

      res => {

        this.root.coupons_by_category = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }
  public get_company_coupons_by_max_price(company_id: number, max_price: number, token: number): void {

    let observable = this.http.get<Coupon[]>(`http://localhost:8080/coupons/company/price?companyId=${company_id}&maxPrice=${max_price}&token=${token}`);

    observable.subscribe(

      res => {

        this.root.coupons_by_max_price = res;

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public delete_coupon(coupon_id: number, company_id: number, token: number): void {

    let observable = this.http.delete(`http://localhost:8080/coupons/${coupon_id}?companyId=${company_id}&token=${token}`);

    observable.subscribe(

      () => {

        alert("Your coupon has been deleted");

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }

  public update_coupon(coupon: Coupon, token: number): void {

    let observable = this.http.put(`http://localhost:8080/coupons?token=${token}`, coupon);

    observable.subscribe(

      () => {

        alert("Your coupon has been updated");

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

  public delete_user(user_id: number, token: number): void {

    let observable = this.http.delete(`http://localhost:8080/users/${user_id}?token=${token}`);

    observable.subscribe(

      () => {

        alert("Your user has been deleted");
        this.router.navigate(["/login"]);

      },
      err => alert("Oh crap !.... Error! Status: " + err.status + ".\nMessage: " + err.error.message)

    );

  }



}
