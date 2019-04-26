import { Component } from '@angular/core';
import { ServiceService } from '../shared/services/service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  private user_name: string;
  private password: string;

  public submit(): void {

    this.service.login(this.user_name, this.password);

  }

  constructor(private service: ServiceService) { }


}
