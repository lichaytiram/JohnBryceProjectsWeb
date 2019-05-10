import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/services/customer.service';
import { Customer, User } from '../shared/models/Customer';
import { Purchase } from '../shared/models/Purchase';
import { UserService } from '../shared/services/User.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  private update_on: boolean;
  private user_name: string;
  private password: string;
  private first_name: string;
  private last_name: string;
  private phone_number: string;
  private email: string;

  // amount of purchase
  private amount: number;

  private max_price: number;

  private category: string;

  private coupon_id_purchase: number;

  private one_coupon: number;

  public token: number;
  public id: number;
  public instance = this.service.root;


  constructor(private service: CustomerService, private user_service: UserService) {

    this.token = <number><unknown>sessionStorage.getItem("token");
    this.id = <number><unknown>sessionStorage.getItem("id");

  }

  ngOnInit(): void {

    this.service.get_customer_name(this.id, this.token);
    this.service.get_amount(this.id, this.token);

  }


  public get_customer() {

    this.service.get_customer(this.id, this.token);

  }
  public get_user() {

    this.service.get_user(this.id, this.token);

  }

  public get_customer_purchase() {

    this.service.get_customer_purchase(this.id, this.token);

  }

  public get_customer_coupons_by_customer_id() {

    this.service.get_customer_coupons_by_customer_id(this.id, this.token);

  }

  public get_customer_coupons_by_category() {

    this.service.get_customer_coupons_by_category(this.id, this.category, this.token);

  }

  public get_customer_coupons_by_max_price() {

    this.service.get_customer_coupons_by_max_price(this.id, this.max_price, this.token);

  }

  public get_all_coupon() {

    this.service.get_all_coupon(this.token);

  }

  public get_coupon() {

    this.service.get_coupon(this.one_coupon, this.token);

  }



  public purchase_coupon(coupon_id: number) {

    let purchse: Purchase = new Purchase();
    purchse.couponId = coupon_id;
    purchse.customerId = this.id;
    purchse.amount = this.amount;

    this.service.purchase_coupon(purchse, this.token);
    this.service.get_all_coupon(this.token);

  }

  public delete_customer() {

    this.service.delete_customer(this.id, this.token);
  }

  public delete_purchase_by_id(purchase_id: number) {

    this.service.delete_purchase_by_id(purchase_id, this.token);

  }

  public delete_purchase() {

    this.service.delete_purchase(this.id, this.coupon_id_purchase, this.token);

  }

  public update_customer() {

    let customer: Customer = new Customer();
    customer.id = this.id;
    customer.firstName = this.first_name;
    customer.lastName = this.last_name;
    customer.phoneNumber = this.phone_number;
    customer.email = this.email;
    let user: User = new User();
    user.id = this.id;
    user.userName = this.user_name;
    user.password = this.password;
    customer.user = user;

    this.service.update_customer(customer, this.token);

    this.update_on = false;

  }

  public update_customer_switch() {
    this.update_on = true;
  }

}
