import { Component } from '@angular/core';
import { Try24Service } from '../shared/services/try24.service';
import { RootObject } from '../shared/models/Itry18v1.model';

@Component({
  selector: 'app-try25',
  templateUrl: './try25.component.html',
  styleUrls: ['./try25.component.css']
})
export class Try25Component {

  public select = this.instance.bearinfo;

  public temp: RootObject;
  constructor(private instance: Try24Service) { }

  public show(): void {
    this.temp = this.select.selected;
  }
}
