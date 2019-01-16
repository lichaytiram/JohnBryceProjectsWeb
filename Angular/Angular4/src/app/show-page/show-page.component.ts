import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.css']
})
export class ShowPageComponent   {


  public user = this.instance.user;

  constructor(private instance: UsersService) { }

}
