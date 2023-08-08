import { Component } from '@angular/core';
import { BorrowService } from '../borrow.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  authorizedStudents: Map<number, string> = new Map<number, string>

  constructor (private borrowService : BorrowService){
    this.getAuthorizedStudents()

    this.authorizedStudents.set(303954, 'Michał Siek')
    this.authorizedStudents.set(123456, 'Michał')

  }

  async getAuthorizedStudents(){
    this.authorizedStudents = await this.borrowService.getAuthorizedStudents()
  }

  async addStudent(name : string, index : number){
    this.borrowService.addStudent(name, index)
  }

  async search(data : string | number){
    this.borrowService.search(data)
  }
}
