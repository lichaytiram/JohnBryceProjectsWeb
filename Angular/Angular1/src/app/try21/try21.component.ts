import { Component } from '@angular/core';
import { Try20Service } from '../shared/services/try20.service';
import { RootObject } from '../shared/models/Itry20.model';

@Component({
  selector: 'app-try21',
  templateUrl: './try21.component.html',
  styleUrls: ['./try21.component.css']
})
export class Try21Component {

  public index: number;
  public crime: RootObject = this.instance.crime_street_info;

  constructor(private instance: Try20Service) { }

}
