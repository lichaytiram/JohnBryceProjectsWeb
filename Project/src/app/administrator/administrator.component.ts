import { Component, OnInit } from '@angular/core';
import { AdministratorService } from '../shared/services/administrator.service';
import { Router } from '@angular/router';
import { Company } from '../shared/models/Company';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  private company_name: string = null;
  private phone_number: string = null;
  private email: string = null;

  private company_id: number;

  //create user
  private user_name: string = null;
  private password: string = null;
  private type: string = null;
  private company_id_user: string = null;

  //update user
  private user_id: number;

  public token: number;
  public id: number;
  public instance = this.service.root;

  constructor(private service: AdministratorService, private router: Router) {

    this.token = <number><unknown>sessionStorage.getItem("token");
    this.id = <number><unknown>sessionStorage.getItem("id");
    this.service.is_valid_token(this.token);

  }

  ngOnInit(): void {

    if (!this.service.is_logged)
      this.router.navigate(["/login"]);

    else
      this.service.get_user_name(this.id, this.token);


  }

  public log_out(): void {

    this.service.log_out(this.token);

  }

  public create_company(): void {

    let company: Company = new Company();
    company.name = this.company_name;
    company.phoneNumber = this.phone_number;
    company.email = this.email;

    this.service.create_company(company, this.token);

  }

  public delete_company(company_id: number) {

    this.service.delete_company(company_id, this.token);

  }

  public delete_user(user_id: number) {

    this.service.delete_user(user_id, this.token);

  }

  public delete_my_user() {

    this.service.delete_my_user(this.id, this.token);

  }

  public update_user() {

    let user: User = new User();
    user.id = this.user_id;
    user.userName = this.user_name;
    user.password = this.password;

    this.service.update_user(user, this.token);

  }

  public update_company() {

    let company: Company = new Company();
    company.id = this.company_id;
    company.name = this.company_name;
    company.phoneNumber = this.phone_number;
    company.email = this.email;

    this.service.update_company(company, this.token);

  }

  public create_user() {

    let user: User = new User();
    user.userName = this.user_name;
    user.password = this.password;
    user.type = this.type;
    user.companyId = this.company_id_user;

    this.service.create_user(user, this.token);

  }

  public get_all_companies() {

    this.service.get_all_companies(this.token);

  }

  public get_all_customers() {

    this.service.get_all_customers(this.token);

  }

  public get_all_purchases() {

    this.service.get_all_purchases(this.token);

  }

  public get_all_users() {

    this.service.get_all_users(this.token);

  }


  private available_delete(type: string, id: number): boolean {

    if (type == "Customer" || id == this.id)
      return false;
    return true;

  }



}
