import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../shared/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  public token: number;
  public instance = this.service.root;

  constructor(private service: CompanyService) {

    this.token = <number><unknown>sessionStorage.getItem("token");

  }

  ngOnInit(): void {

    this.service.get_user_name(this.token);

  }

}
