import { Component } from '@angular/core';
import { ServiceService } from '../shared/services/service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private user_name: string;
  private password: string;
  private firstName: string;
  private lastName: string;
  private phoneNumber: number;
  private email: string;

  public register():void {

    
  }

  constructor(private service: ServiceService) { }

}
