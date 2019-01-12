import { Component } from '@angular/core';
import { Try18Service } from '../shared/services/try18.service';

@Component({
  selector: 'app-try18',
  templateUrl: './try18.component.html',
  styleUrls: ['./try18.component.css']
})
export class Try18Component {

  public number: number;
  public select = this.instance;

  public in() {
    this.select.getSpecificBeer(this.number);
  }

  constructor(private instance: Try18Service) { }



}
