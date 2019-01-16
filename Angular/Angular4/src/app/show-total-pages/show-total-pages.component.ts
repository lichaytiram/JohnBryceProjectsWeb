import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-show-total-pages',
  templateUrl: './show-total-pages.component.html',
  styleUrls: ['./show-total-pages.component.css']
})
export class ShowTotalPagesComponent {

  public user = this.instance.user;

  constructor(private instance: UsersService) { }


}
