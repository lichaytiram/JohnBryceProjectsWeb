import { Component } from '@angular/core';
import { StudentService } from '../Shared/services/student.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {

  public object = this.instance.student_info;
  public students = this.object;

  constructor(private instance: StudentService) {
    instance.student_info.selected_one = "Bob";
  }

  public send() {
    this.instance.get_one();
  }
}
