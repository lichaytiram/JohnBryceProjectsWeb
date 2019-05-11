import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../shared/services/company.service';
import { UserService } from '../shared/services/User.service';
import { Router } from '@angular/router';
import { Coupon } from '../shared/models/Coupon';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public token: number;
  public id: number;
  public companyId: number;
  public instance = this.service.root;

  //create coupon && update
  private coupon_id: number = null;
  private category: string = null;
  private title: string = null;
  private description: string = null;
  private start_date: Date = null;
  private end_date: Date = null;
  private amount: number = null;
  private price: number = null;
  private image: string = null;

  private max_price: number = null;


  //update user
  private user_name: string = null;
  private password: string = null;

  constructor(private service: CompanyService, private user_service: UserService, private router: Router) {

    this.token = <number><unknown>sessionStorage.getItem("token");
    this.id = <number><unknown>sessionStorage.getItem("id");
    this.companyId = <number><unknown>sessionStorage.getItem("company");

  }

  ngOnInit(): void {

    this.service.get_user_name(this.id, this.token);

  }

  public log_out(): void {
    alert("You are log out!\nWe are waiting for next visit");
    sessionStorage.clear();
    this.router.navigate(["/login"]);

  }

  public get_company(): void {

    this.service.get_company(this.companyId, this.token);

  }

  public get_user(): void {

    this.service.get_user(this.id, this.token);

  }

  public create_coupon(): void {

    let coupon: Coupon = new Coupon();
    coupon.companyId = this.companyId;
    coupon.title = this.title;
    coupon.description = this.description;
    coupon.category = this.category;
    coupon.startDate = this.start_date;
    coupon.endDate = this.end_date;
    coupon.amount = this.amount;
    coupon.price = this.price;
    coupon.image = this.image;

    this.service.create_coupon(coupon, this.token);

  }

  public get_company_coupons_by_company_id(): void {

    this.service.get_company_coupons_by_company_id(this.companyId, this.token);

  }

  public get_company_coupons_by_category(): void {

    if (this.category == null)
      alert("Enter category plz");
    else
      this.service.get_company_coupons_by_category(this.companyId, this.category, this.token);

  }

  public get_company_coupons_by_max_price(): void {

    if (this.max_price == null)
      alert("Enter max price plz");
    else this.service.get_company_coupons_by_max_price(this.companyId, this.max_price, this.token);

  }

  public delete_coupon(coupon_id: number): void {

    this.service.delete_coupon(coupon_id, this.companyId, this.token);

  }

  public update_coupon(): void {

    let coupon: Coupon = new Coupon();
    coupon.id = this.coupon_id;
    coupon.companyId = this.companyId;
    coupon.title = this.title;
    coupon.description = this.description;
    coupon.category = this.category;
    coupon.startDate = this.start_date;
    coupon.endDate = this.end_date;
    coupon.amount = this.amount;
    coupon.price = this.price;
    coupon.image = this.image;

    this.service.update_coupon(coupon, this.token);

  }

  public update_user(): void {

    let user: User = new User();
    user.id = this.id;
    user.userName = this.user_name;
    user.password = this.password;

    this.service.update_user(user, this.token);

  }

  public delete_user(): void {

    this.service.delete_user(this.id, this.token);

  }

}
