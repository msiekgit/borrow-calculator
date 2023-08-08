import { Component, Input } from '@angular/core';
import { BorrowService } from '../borrow.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() authorizedStudents: Map<number, string> = new Map<number, string>
  

  constructor (private borrowService : BorrowService){
    this.getAuthorizedStudents()
  }

  async getAuthorizedStudents(){
    this.authorizedStudents = await this.borrowService.getAuthorizedStudents()
  }

}
