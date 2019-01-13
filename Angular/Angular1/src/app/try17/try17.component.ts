import { Component } from '@angular/core';
import { Try17Service } from '../shared/services/try17.service';
import { Wrapper } from '../shared/models/try17';

@Component({
  selector: 'app-try17',
  templateUrl: './try17.component.html',
  styleUrls: ['./try17.component.css']
})
export class Try17Component {
  public new: Wrapper = this.instance.my_info;

  constructor(private instance: Try17Service) { }


}
