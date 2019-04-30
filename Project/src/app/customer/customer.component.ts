import { Component } from '@angular/core';
import { ServiceService } from '../shared/services/service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  constructor(private service: ServiceService) { }

  public show() {

    let token: number = <number><unknown>sessionStorage.getItem("token")

    var check = this.service.getCustomer(5, token);
    console.log(check);

  }

}
