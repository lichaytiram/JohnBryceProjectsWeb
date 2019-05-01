import { Component } from '@angular/core';
import { ServiceService } from '../shared/services/service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  public token: number;

  constructor(private service: ServiceService) {

    this.token = <number><unknown>sessionStorage.getItem("token");

  }

  public show() {

    var check = this.service.getCustomer(5, this.token);

    console.log(check);

  }

}
