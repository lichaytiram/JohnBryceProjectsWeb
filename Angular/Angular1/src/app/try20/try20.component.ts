import { Component } from '@angular/core';
import { Try20Service } from '../shared/services/try20.service';

@Component({
  selector: 'app-try20',
  templateUrl: './try20.component.html',
  styleUrls: ['./try20.component.css']
})
export class Try20Component {

  public year = 2016;
  public month;

  public send() {
    let temp = "";
    if (this.month < 10)
      temp += 0;
    let date_temp: string = this.year + "-" + temp + this.month;
    for (let i = 0; i < Object.keys(this.instance.crime_street_info.selected).length; i++) {
      if (this.instance.crime_street_info.selected[i].date == date_temp) {
        this.instance.index = i;
        break;
      }
    }
  }

  constructor(private instance: Try20Service) { }

}
