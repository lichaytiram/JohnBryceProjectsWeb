import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/User';
import { Customer } from '../shared/models/Customer';
import { Purchase } from '../shared/models/Purchase';
import { CustomerService } from '../shared/services/customer.service';
import { UserService } from '../shared/services/user.service';
import { PurchaseService } from '../shared/services/purshase.service';
import { CouponService } from '../shared/services/coupon.service';
import { Router } from '@angular/router';
import { Coupon } from '../shared/models/Coupon';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  public myName: string;
  public token: number;
  public id: number;

  
  private userName: string;
  private password: string;
  private firstName: string;
  private lastName: string;
  private phoneNumber: string;
  private email: string;

  // amount of purchase
  private amount: number;

  private maxPrice: number;

  private category: string;

  // objects
  public user: User;
  public customer: Customer;
  public amountCoupons: number;
  public customerPurchases: Purchase[];
  public customerCouponsByCustomerId: Coupon[];
  public customerCouponsByCategory: Coupon[];
  public customerCouponsByMaxPrice: Coupon[];
  public allCoupons: Coupon[];

  constructor(private customerService: CustomerService, private userService: UserService, private purchaseService: PurchaseService, private couponService: CouponService, private router: Router) {

    this.token = <number><unknown>sessionStorage.getItem("token");
    this.id = <number><unknown>sessionStorage.getItem("id");

  }

  ngOnInit(): void {

    this.getAllCoupon();

    this.customerService.getCustomerName(this.id, this.token).subscribe

      (

        res => this.myName = res,

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

    this.purchaseService.getAmount(this.id, this.token).subscribe

      (

        res => this.amountCoupons = res,

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  public logOut(): void {

    this.userService.logOut(this.token).subscribe

      (

        () => {

          alert("You are log out!\nWe are waiting for next visit");
          sessionStorage.clear();
          this.router.navigate(["/login"]);

        },

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  public purchaseCoupon(couponId: number, index: number): void {

    // add updates 2 thinks
    let purchse: Purchase = new Purchase();
    purchse.couponId = couponId;
    purchse.customerId = this.id;
    purchse.amount = this.amount;

    this.purchaseService.purchaseCoupon(purchse, this.token).subscribe

      (

        () => {

          this.amountCoupons += purchse.amount;
          this.allCoupons[index].amount -= purchse.amount;

          alert("Your purchase has been done");
        },

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  public updateCustomer(): void {

    let customer: Customer = new Customer();
    let user: User = new User();

    customer.id = this.id;
    customer.firstName = this.firstName;
    customer.lastName = this.lastName;
    customer.phoneNumber = this.phoneNumber;
    customer.email = this.email;
    user.id = this.id;
    user.userName = this.userName;
    user.password = this.password;
    user.type = "Customer";
    customer.user = user;

    this.customerService.updateCustomer(customer, this.token).subscribe

      (

        () => alert("Your customer has been updated"),

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  public deleteCustomer(): void {

    this.customerService.deleteCustomer(this.id, this.token).subscribe

      (

        () => {

          alert("Your customer has been deleted");
          this.router.navigate(["/login"]);

        },
        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  public deletePurchaseById(purchaseId: number, amount: number, type: string, index: number): void {

    this.purchaseService.deletePurchaseById(purchaseId, this.token).subscribe

      (

        () => {

          alert("Your purchase has been deleted")
          this.amountCoupons -= amount;

          if (type === "id")
            this.updateArray(this.customerCouponsByCustomerId, index);
          else if (type === "category")
            this.updateArray(this.customerCouponsByCategory, index);
          else if (type === "maxPrice")
            this.updateArray(this.customerCouponsByMaxPrice, index);
          else
            this.updateArray(this.customerPurchases, index);

        },

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  public getCustomer(): void {

    this.customerService.getCustomer(this.id, this.token).subscribe

      (

        res => this.customer = res,

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  public getUser(): void {

    this.userService.getUser(this.id, this.token).subscribe

      (

        res => this.user = res,

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  public getCustomerPurchase(): void {

    this.purchaseService.getCustomerPurchase(this.id, this.token).subscribe

      (

        res => this.customerPurchases = res,

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  public getCustomerCouponsByCustomerId(): void {

    this.couponService.getCustomerCouponsByCustomerId(this.id, this.token).subscribe

      (

        res => this.customerCouponsByCustomerId = res,

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  public getCustomerCouponsByCategory(): void {

    if (this.category == null)
      alert("Enter category plz");

    else {

      this.couponService.getCustomerCouponsByCategory(this.id, this.category, this.token).subscribe

        (

          res => this.customerCouponsByCategory = res,

          err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

        );
    }

  }

  public getCustomerCouponsByMaxPrice(): void {

    if (this.maxPrice == null)
      alert("Enter max price plz");

    else {

      this.couponService.getCustomerCouponsByMaxPrice(this.id, this.maxPrice, this.token).subscribe

        (

          res => this.customerCouponsByMaxPrice = res,

          err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

        );

    }

  }

  public getAllCoupon(): void {

    this.couponService.getAllCoupon(this.token).subscribe

      (

        res => this.allCoupons = res,

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  private updateArray<T>(array: T[], indexToDelete: number): void {

    array.splice(indexToDelete, 1);

  }

}