import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-show-total',
  templateUrl: './show-total.component.html',
  styleUrls: ['./show-total.component.css']
})
export class ShowTotalComponent {
  public user = this.instance.user;

  constructor(private instance: UsersService) { }


}
