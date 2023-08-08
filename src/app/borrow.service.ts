import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  constructor() { }

  authorizedStudents = new Map()

  async addStudent(name : string, index : number){
    this.authorizedStudents.set(index,name)

    console.log('Updated list of students: ', this.authorizedStudents )
  }

  async search(data : string | number){
    if (this.authorizedStudents.has(data)){
      return 'Student authorized'
    }
    else {
      return 'Student not authorized'
    }
  }

  async getAuthorizedStudents(){
    return this.authorizedStudents
  }
}