import { Component } from '@angular/core';
import { Try18Service } from '../shared/services/try18.service';
import { RootObject } from '../shared/models/Itry18v1.model';

@Component({
  selector: 'app-try19',
  templateUrl: './try19.component.html',
  styleUrls: ['./try19.component.css']
})
export class Try19Component {

  public select = this.instance.bearinfo;

  public temp: RootObject;
  constructor(private instance: Try18Service) { }

  public show(): void {
    this.temp = this.select.selected;
  }
}
