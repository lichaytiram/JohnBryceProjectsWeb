import { Component } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-choose4',
  templateUrl: './choose4.component.html',
  styleUrls: ['./choose4.component.css']
})
export class Choose4Component {

  constructor(private instance: InfoService) { }

}
