import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {
  
  constructor() { }

  authorizedStudents = new Map()

  async addStudent(name : string, index : number){
    this.authorizedStudents.set(index,name)
  }

  async getAuthorizedStudents(){
    return this.authorizedStudents
  }
}