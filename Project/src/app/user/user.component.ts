import { Component } from '@angular/core';
import { ServiceService } from '../shared/services/service.service';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  private user_name: string = "username1";
  private password: string = "123Xx";

  public submit(): void {

    var user: User = new User(this.user_name, this.password);

    this.service.login(user);

  }

  constructor(private service: ServiceService) { }


}
