import { Component } from '@angular/core';
import { Try24Service } from '../shared/services/try24.service';

@Component({
  selector: 'app-try24',
  templateUrl: './try24.component.html',
  styleUrls: ['./try24.component.css']
})
export class Try24Component {

  public number: number;
  public select = this.instance;

  public in() {
    this.select.getSpecificBeer(this.number);
  }

  constructor(private instance: Try24Service) { }



}
