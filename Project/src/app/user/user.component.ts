import { Component } from '@angular/core';
import { UserService } from '../shared/services/User.service';
import { LoginUser } from '../shared/models/LoginUser';
import { Customer, User } from '../shared/models/Customer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  private user_name: string = "username1";
  private password: string = "123Xx";
  private first_name: string;
  private last_name: string;
  private phone_number: string;
  private email: string;

  public submit(): void {

    let user: LoginUser = new LoginUser(this.user_name, this.password);

    this.service.login(user);

  }

  public register(): void {

    let customer: Customer = new Customer();
    customer.firstName = this.first_name;
    customer.lastName = this.last_name;
    customer.phoneNumber = this.phone_number;
    customer.email = this.email;
    let user: User = new User();
    user.userName = this.user_name;
    user.password = this.password;
    customer.user = user;

    this.service.register(customer);

  }

  constructor(private service: UserService) { }

  public toggleSignup() {

    document.getElementById("login-toggle").style.backgroundColor = "#fff";
    document.getElementById("login-toggle").style.color = "#222";
    document.getElementById("signup-toggle").style.backgroundColor = "#57b846";
    document.getElementById("signup-toggle").style.color = "#fff";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";

  }

  public toggleLogin() {

    document.getElementById("login-toggle").style.backgroundColor = "#57B846";
    document.getElementById("login-toggle").style.color = "#fff";
    document.getElementById("signup-toggle").style.backgroundColor = "#fff";
    document.getElementById("signup-toggle").style.color = "#222";
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";

  }


}
