import { Component } from '@angular/core';
import { ServiceService } from '../shared/services/service.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent {

  constructor(private service: ServiceService) { }

}
