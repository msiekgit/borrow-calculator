import { Component } from '@angular/core';
import { BorrowService } from '../borrow.service';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  authorizedStudents: Map<number, string> = new Map<number, string>

  ngOnInit() {
    this.getAuthorizedStudents();

  }

  constructor (private borrowService : BorrowService, private fb : FormBuilder){
    this.getAuthorizedStudents()
  }

  studentForm = this.fb.group({
    name: ['',],
    index: ['', [Validators.required, this.sixDigitNumberValidator]],
  });

  submit(event: Event) {
    event.preventDefault();
  
    if (this.studentForm.valid) {
      const name = this.studentForm.get('name')!.value??'';
      const index = Number(this.studentForm.get('index')!.value??'');
      
      this.addStudent(name, index);
      
      this.studentForm.reset();

      console.log('Updated list: ', this.authorizedStudents);
      
    }
  }

  async getAuthorizedStudents(){
    // this.authorizedStudents = await this.borrowService.getAuthorizedStudents()
  }

  async addStudent(name : string, index : number){
    this.borrowService.addStudent(name, index)
  }

  async search(data : string | number){
    this.borrowService.search(data)
  }
  sixDigitNumberValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
  
    if (!/^\d{6}$/.test(value)) {
      return { sixDigitNumber: true };
    }
  
    return null;
  }
}
