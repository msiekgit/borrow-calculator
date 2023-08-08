import { Component, Input } from '@angular/core';
import { BorrowService } from '../borrow.service';
import { FormBuilder } from '@angular/forms';

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

  constructor (private borrowService : BorrowService, private fb : FormBuilder){} 
  isAuthorized : string = ''

  searchForm = this.fb.group({
    data: ['',]
  });

  submit(event: Event) {
    event.preventDefault();

    const data = this.searchForm.get('data')!.value??'';
    let isAuthorized = false
    if (this.authorizedStudents.has(Number(data))){
      isAuthorized = true
    }

    for (const value of this.authorizedStudents.values()){
      if (value === data){
        isAuthorized = true
      }
    }
    
    if (isAuthorized === true){
      this.isAuthorized = 'Student authorized'
    }
    else {
      this.isAuthorized = 'Student not authorized'
    }   

    this.searchForm.reset();
  } 

  async getAuthorizedStudents(){
    this.authorizedStudents = this.borrowService.authorizedStudents
  }

  async addStudent(name : string, index : number){
    this.borrowService.addStudent(name, index);
    this.isAuthorized =''
  }
}
