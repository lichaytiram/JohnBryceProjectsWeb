import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent   {

  public user = this.instance.user;

  constructor(private instance: UsersService) { }

}
