import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent {

  public id: number;

  public inside() {
    this.instance.get(this.id);
  }
  constructor(private instance: UsersService) { }


}
