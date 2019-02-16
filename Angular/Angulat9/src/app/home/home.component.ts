import { Component } from '@angular/core';
import { ServiceService } from '../shared/service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public list = null;

  constructor(private instance: ServiceService) {
    this.list = instance.item_list;
  }

  public send(value: string) {
    console.log(value);

    this.instance.post(value);
  }


}
