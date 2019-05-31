import { Component, OnInit } from '@angular/core';
import { Company } from '../shared/models/Company';
import { User } from '../shared/models/User';
import { UserService } from '../shared/services/user.service';
import { CompanyService } from '../shared/services/company.service';
import { CustomerService } from '../shared/services/customer.service';
import { PurchaseService } from '../shared/services/purshase.service';
import { Router } from '@angular/router';
import { Customer } from '../shared/models/Customer';
import { Purchase } from '../shared/models/Purchase';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  public myName: string;
  public token: number;
  public id: number;

  private companyName: string = null;
  private phoneNumber: string = null;
  private email: string = null;

  private companyId: number;

  //create user
  private userName: string = null;
  private password: string = null;
  private type: string = null;
  private companyIdUser: string = null;

  //update user
  private userId: number;

  // objects
  public user: User;
  public allUsers: User[];
  public allCustomers: Customer[];
  public allPurchases: Purchase[];
  public allCompanies: Company[];

  constructor(private userService: UserService, private companyService: CompanyService, private customerService: CustomerService, private purchaseService: PurchaseService, private router: Router) {

    this.token = <number><unknown>sessionStorage.getItem("token");
    this.id = <number><unknown>sessionStorage.getItem("id");

  }

  ngOnInit(): void {

    this.userService.getUserName(this.id, this.token).subscribe(

      res => this.myName = res,

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

  public createCompany(): void {

    let company: Company = new Company();
    company.name = this.companyName;
    company.phoneNumber = this.phoneNumber;
    company.email = this.email;

    this.companyService.createCompany(company, this.token).subscribe

      (

        () => alert("company has been created"),

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  public createUser(): void {

    let user: User = new User();
    user.userName = this.userName;
    user.password = this.password;
    user.type = this.type;
    user.companyId = this.companyIdUser;

    this.userService.createUser(user, this.token).subscribe

      (

        () => alert("user has been created"),

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  public updateUser(): void {

    let user: User = new User();
    user.id = this.userId;
    user.userName = this.userName;
    user.password = this.password;

    this.userService.updateUser(user, this.token).subscribe

      (

        () => alert("Your user has been updated"),

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  public updateCompany(): void {

    let company: Company = new Company();
    company.id = this.companyId;
    company.name = this.companyName;
    company.phoneNumber = this.phoneNumber;
    company.email = this.email;

    this.companyService.updateCompany(company, this.token).subscribe

      (

        () => alert("company has been updated"),

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  public deleteMyUser(): void {

    this.userService.deleteMyUser(this.id, this.token).subscribe

      (

        () => {

          alert("Your user has been deleted");
          this.router.navigate(["/login"]);

        },
        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  public deleteUser(userId: number, index: number): void {

    this.userService.deleteUser(userId, this.token).subscribe

      (

        () => {

          alert("user has been deleted");
          this.updateArray(this.allUsers, index);

        },

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  public deleteCompany(companyId: number, index: number): void {

    this.companyService.deleteCompany(companyId, this.token).subscribe

      (

        () => {

          alert("company has been deleted")
          this.updateArray(this.allCompanies, index);

        },

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

  public getAllCompanies(): void {

    this.companyService.getAllCompanies(this.token).subscribe

      (

        res => this.allCompanies = res,

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  public getAllCustomers(): void {

    this.customerService.getAllCustomers(this.token).subscribe

      (

        res => this.allCustomers = res,

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  public getAllPurchases(): void {

    this.purchaseService.getAllPurchases(this.token).subscribe

      (

        res => this.allPurchases = res,

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  public getAllUsers(): void {

    this.userService.getAllUsers(this.token).subscribe

      (

        res => this.allUsers = res,

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      );

  }

  private updateArray<T>(array: T[], indexToDelete: number): void {

    array.splice(indexToDelete, 1);

  }

  // use by html
  public availableToDelete(type: string, id: number): boolean {

    if (type === "Customer" || id == this.id)
      return false;

    return true;

  }

}
