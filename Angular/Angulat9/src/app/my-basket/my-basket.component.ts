import { Component } from '@angular/core';
import { ServiceService } from '../shared/service/service.service';

@Component({
  selector: 'app-my-basket',
  templateUrl: './my-basket.component.html',
  styleUrls: ['./my-basket.component.css']
})
export class MyBasketComponent {
  public list = null;

  constructor(private instance: ServiceService) {
    instance.get_basket();
    this.list = this.instance.item_list;
  }

  public delete(value: string) {
    this.instance.delete_basket(value);
    this.instance.get_basket();
  }

}
