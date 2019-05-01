import { Component } from '@angular/core';
import { CustomerService } from '../shared/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  public token: number;
  public instance = this.service.root;

  constructor(private service: CustomerService) {

    this.token = <number><unknown>sessionStorage.getItem("token");

  }

  public get_customer() {

    this.service.getCustomer(5, this.token);

  }

  public delete_customer() {

    // this.service.deleteCustomer(this.token);
  }

}
