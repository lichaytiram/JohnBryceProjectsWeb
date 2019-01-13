import { Component, OnInit } from '@angular/core';
import { Try10Service } from '../try10.service';

@Component({
  selector: 'app-try10',
  templateUrl: './try10.component.html',
  styleUrls: ['./try10.component.css']
})
export class Try10Component {

  public name: string = "Anna";

  public set_name() {
    this.myname.name.my_name=this.name;
  }
  constructor(private myname: Try10Service) { }

}
