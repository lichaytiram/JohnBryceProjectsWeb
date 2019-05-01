import { Component } from '@angular/core';
import { CompanyService } from '../shared/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

  constructor(private service: CompanyService) { }

}
