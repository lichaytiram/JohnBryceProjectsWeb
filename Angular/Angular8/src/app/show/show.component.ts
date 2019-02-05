import { Component } from '@angular/core';
import { StudentService } from '../Shared/services/student.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {

  private students = null;

  constructor(private instance: StudentService) {
    this.students = instance.student_info;
  }


}
