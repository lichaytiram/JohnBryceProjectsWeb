import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {

  public user = this.instance.user;

  constructor(private instance: UsersService) { }



}
