import { Component } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-choose5',
  templateUrl: './choose5.component.html',
  styleUrls: ['./choose5.component.css']
})
export class Choose5Component {

  constructor(private instance: InfoService) { }

}
