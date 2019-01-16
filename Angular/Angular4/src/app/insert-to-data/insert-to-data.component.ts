import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-insert-to-data',
  templateUrl: './insert-to-data.component.html',
  styleUrls: ['./insert-to-data.component.css']
})
export class InsertToDataComponent {

  public user = this.instance.user;

  public check(): boolean {
    if (this.instance.id == null)
      return false;
    return this.instance.id < 3 && this.instance.id >= 0;
  }
  constructor(private instance: UsersService) { }

}
