import { Component, OnInit } from '@angular/core';
import { Try10Service } from '../try10.service';

@Component({
  selector: 'app-try11',
  templateUrl: './try11.component.html',
  styleUrls: ['./try11.component.css']
})
export class Try11Component {

  name: string;


  constructor(private myname: Try10Service) {
    this.name = this.myname.name;
  }
}
