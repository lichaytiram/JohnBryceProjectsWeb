import { Component } from '@angular/core';
import { AdministratorService } from '../shared/services/administrator.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent {

  constructor(private service: AdministratorService) { }

}
