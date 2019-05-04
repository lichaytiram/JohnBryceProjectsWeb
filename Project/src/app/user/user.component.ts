import { Component } from '@angular/core';
import { User } from '../shared/models/User';
import { UserService } from '../shared/services/User.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  private user_name: string = "user3";
  private password: string = "passwordP1";

  public submit(): void {

    var user: User = new User(this.user_name, this.password);

    this.service.login(user);

  }

  constructor(private service: UserService) { }


}
