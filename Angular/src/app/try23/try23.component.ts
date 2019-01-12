import { Component } from '@angular/core';
import { Try22Service } from '../shared/services/try22.service';

@Component({
  selector: 'app-try23',
  templateUrl: './try23.component.html',
  styleUrls: ['./try23.component.css']
})
export class Try23Component {

  public name = this.instance.name;

  constructor(private instance: Try22Service) { }
}
