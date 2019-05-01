import { Component } from '@angular/core';
import { Customer, User } from '../shared/models/Customer';
import { UserService } from '../shared/services/User.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private user_name: string;
  private password: string;
  private first_name: string;
  private last_name: string;
  private phone_number: string;
  private email: string;

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

}
