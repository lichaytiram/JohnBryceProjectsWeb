import { Component } from '@angular/core';
import { StudentService } from '../Shared/services/student.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {

  private object = this.instance.student_info;
  private students = this.object;

  constructor(private instance: StudentService) {
    instance.student_info.selected_one = "Bob";
  }

  public send() {
    this.instance.get_one();
  }
}
