import { Component } from '@angular/core';
import { UniversityService } from '../shared/services/university.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {

  public select = this.instance.country;

  constructor(private instance: UniversityService) { }

}
