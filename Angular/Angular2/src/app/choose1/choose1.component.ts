import { Component } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-choose1',
  templateUrl: './choose1.component.html',
  styleUrls: ['./choose1.component.css']
})
export class Choose1Component {

  constructor(private instance: InfoService) { }

}
