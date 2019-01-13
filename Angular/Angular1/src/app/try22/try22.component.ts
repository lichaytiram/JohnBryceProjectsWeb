import { Component } from '@angular/core';
import { Try22Service } from '../shared/services/try22.service';

@Component({
  selector: 'app-try22',
  templateUrl: './try22.component.html',
  styleUrls: ['./try22.component.css']
})
export class Try22Component {

  public name: string;
  public skin: number;
  public send() {
    if (this.name.charAt(0) > 'Z')
      this.name = this.name.charAt(0).toUpperCase() + this.name.substring(1, this.name.length);
    this.instance.name.selected1 = this.name;
    this.instance.name.selected2 = this.skin;
  }

  constructor(private instance: Try22Service) { }


}
