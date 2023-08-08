import { Component, Input } from '@angular/core';
import { BorrowService } from '../borrow.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() authorizedStudents: Map<number, string> = new Map<number, string>
  
  ngOnInit() {
    this.getAuthorizedStudents();
    console.log('authorizedStudents map inside list component: ', this.authorizedStudents);
  }

  constructor (private borrowService : BorrowService){}  

  async getAuthorizedStudents(){
    this.authorizedStudents = this.borrowService.authorizedStudents
  }

  async addStudent(name : string, index : number){
    this.borrowService.addStudent(name, index)
  }

}
