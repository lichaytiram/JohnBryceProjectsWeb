import { Component, OnInit } from '@angular/core';
import { AdministratorService } from '../shared/services/administrator.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  public token: number;
  public instance = this.service.root;

  constructor(private service: AdministratorService) {

    this.token = <number><unknown>sessionStorage.getItem("token");

  }

  ngOnInit(): void {

    this.service.get_user_name(this.token);

  }


}
