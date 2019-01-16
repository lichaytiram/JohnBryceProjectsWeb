import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-show-per-page',
  templateUrl: './show-per-page.component.html',
  styleUrls: ['./show-per-page.component.css']
})
export class ShowPerPageComponent {

  public user = this.instance.user;

  constructor(private instance: UsersService) { }

}
