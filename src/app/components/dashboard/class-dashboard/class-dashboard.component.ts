import { Component } from '@angular/core';
import { Student } from '../../../models/student.model';
import { ClassService } from '../../../services/class.service';

@Component({
  selector: 'app-class-dashboard',
  templateUrl: './class-dashboard.component.html',
  styleUrl: './class-dashboard.component.css'
})
export class ClassDashboardComponent {
  studentName: string = '';
  chosenStudent: Student | null = null;

  constructor(private classService: ClassService) { }

  get students(): Student[] {
    return this.classService.getStudents();
  }

  get removedStudents(): Student[] {
    return this.classService.getRemovedStudents();
  }

  addStudent() {
    const newStudent = new Student(Date.now(), this.studentName);
    this.classService.addStudent(newStudent);
    this.studentName = '';
  }

  removeStudent(student: Student) {
    this.classService.removeStudent(student);
  }

  reAddStudent(student: Student) {
    this.classService.reAddStudent(student);
  }

  resetStudents() {
    this.classService.resetStudents();
  }

  chooseRandomStudent() {
    this.chosenStudent = this.classService.chooseRandomStudent();
  }

  giveJoker(student: Student) {
    student.hasJoker = true;
  }

  removeJoker(student: Student) {
    student.hasJoker = false;
  }
}
