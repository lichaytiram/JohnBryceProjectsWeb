import { Component } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {

  public car = this.instance.info;

  constructor(private instance: InfoService) { }

}
