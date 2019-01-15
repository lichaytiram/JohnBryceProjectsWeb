import { Component } from '@angular/core';
import { UniversityService } from '../shared/services/university.service';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent {

  public country: string = null;
  public in(): void {
    this.instance.get(this.country);
  }

  constructor(private instance: UniversityService) { }
}
