import { Component, OnInit } from '@angular/core';
import { Coupon } from '../shared/models/Coupon';
import { User } from '../shared/models/User';
import { UserService } from '../shared/services/user.service';
import { CompanyService } from '../shared/services/company.service';
import { CouponService } from '../shared/services/coupon.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public token: number;
  public id: number;
  public companyId: number;
  public userServiceInstance = this.userService.root;
  public companyServiceInstance = this.companyService.root;
  public couponServiceInstance = this.couponService.root;

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

  constructor(private userService: UserService, private companyService: CompanyService, private couponService: CouponService) {

    this.token = <number><unknown>sessionStorage.getItem("token");
    this.id = <number><unknown>sessionStorage.getItem("id");
    this.companyId = <number><unknown>sessionStorage.getItem("company");

  }


  ngOnInit(): void {

    this.userService.getUserName(this.id, this.token);

  }

  public logOut(): void {

    this.userService.logOut(this.token);

  }

  public createCoupon(): void {

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

    this.couponService.createCoupon(coupon, this.token);

  }

  public updateCoupon(): void {

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

    this.couponService.updateCoupon(coupon, this.token);

  }

  public updateUser(): void {

    let user: User = new User();
    user.id = this.id;
    user.userName = this.user_name;
    user.password = this.password;

    this.userService.updateUser(user, this.token);

  }

  public deleteCoupon(coupon_id: number): void {

    this.couponService.deleteCoupon(coupon_id, this.companyId, this.token);

  }

  public deleteMyUser(): void {

    this.userService.deleteMyUser(this.id, this.token);

  }

  public getCompany(): void {

    this.companyService.getCompany(this.companyId, this.token);

  }

  public getUser(): void {

    this.userService.getUser(this.id, this.token);

  }


  public getCompanyCouponsByCompanyId(): void {

    this.couponService.getCompanyCouponsByCompanyId(this.companyId, this.token);

  }

  public getCompanyCouponsByCategory(): void {

    if (this.category == null)
      alert("Enter category plz");
    else
      this.couponService.getCompanyCouponsByCategory(this.companyId, this.category, this.token);

  }

  public getCompanyCouponsByMaxPrice(): void {

    if (this.max_price == null)
      alert("Enter max price plz");
    else this.couponService.getCompanyCouponsByMaxPrice(this.companyId, this.max_price, this.token);

  }

}
