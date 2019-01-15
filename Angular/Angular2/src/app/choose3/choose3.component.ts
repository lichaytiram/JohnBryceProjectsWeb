import { Component } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-choose3',
  templateUrl: './choose3.component.html',
  styleUrls: ['./choose3.component.css']
})
export class Choose3Component {

  constructor(private instance: InfoService) { }

}
