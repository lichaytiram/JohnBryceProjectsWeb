import { Component } from '@angular/core';
import { Try14Service } from '../try14.service';

@Component({
  selector: 'app-try15',
  templateUrl: './try15.component.html',
  styleUrls: ['./try15.component.css']
})
export class Try15Component {

  public number: number;
  public name: string;

  constructor(private instance: Try14Service) { }
  
  public send() {
    this.instance.name = this.name;
    this.instance.number = this.number;
  }
}
