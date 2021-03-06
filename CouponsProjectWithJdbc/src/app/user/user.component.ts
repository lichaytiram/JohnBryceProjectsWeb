import { Component } from '@angular/core';
import { LoginUser } from '../shared/models/LoginUser';
import { Customer } from '../shared/models/Customer';
import { User } from '../shared/models/User';
import { UserService } from '../shared/services/user.service';
import { CustomerService } from '../shared/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  private userName: string = null;
  private password: string = null;
  private passwordConfirm: string = null;
  private firstName: string = null;
  private lastName: string = null;
  private phoneNumber: string = null;
  private email: string = null;

  constructor(private userService: UserService, private customerService: CustomerService, private router: Router) { }

  public login(): void {

    let user: LoginUser = new LoginUser(this.userName, this.password);

    this.userService.login(user).subscribe

      (

        res => {

          if (res.clientType === "Customer")
            this.router.navigate(["login/customer"]);

          else if (res.clientType === "Company") {
            this.router.navigate(["login/company"]);
            sessionStorage.setItem("company", res.companyId + "");
          }

          else
            this.router.navigate(["login/administrator"]);

          sessionStorage.setItem("token", res.token + "");
          sessionStorage.setItem("id", res.id + "");
          this.userName = null;
          this.password = null;

        },

        err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

      )

  }

  public register(): void {

    let type = "Customer";
    let user: User = new User(this.userName, this.password, null, type);
    let customer: Customer = new Customer(this.firstName, this.lastName, this.phoneNumber, this.email, user);

    if (this.password != this.passwordConfirm)
      alert("Your password isn't even, please try again!");

    else {

      this.customerService.createCustomer(customer).subscribe

        (

          () => alert("your user has been created"),

          err => alert("Oh crap !.... Error! Status: " + err.error.statusCode + ".\nMessage: " + err.error.externalMessage)

        );

    }

  }

  public toggleSignup() {

    this.userName = null;
    this.password = null;
    this.passwordConfirm = null;
    this.firstName = null;
    this.lastName = null;
    this.phoneNumber = null;
    this.email = null;

    document.getElementById("login-toggle").style.backgroundColor = "#fff";
    document.getElementById("login-toggle").style.color = "#222";
    document.getElementById("signup-toggle").style.backgroundColor = "#57b846";
    document.getElementById("signup-toggle").style.color = "#fff";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";

  }

  public toggleLogin() {

    this.userName = null;
    this.password = null;

    document.getElementById("login-toggle").style.backgroundColor = "#57B846";
    document.getElementById("login-toggle").style.color = "#fff";
    document.getElementById("signup-toggle").style.backgroundColor = "#fff";
    document.getElementById("signup-toggle").style.color = "#222";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";

  }

}
