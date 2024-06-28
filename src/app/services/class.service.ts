import { Injectable } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class ClassService {
  private students: Student[] = [];
  private removedStudents: Student[] = [];

  addStudent(student: Student) {
    this.students.push(student);
  }

  removeStudent(student: Student) {
    this.students = this.students.filter(s => s.id !== student.id);
    this.removedStudents.push(student);
  }

  getStudents(): Student[] {
    return this.students;
  }

  getRemovedStudents(): Student[] {
    return this.removedStudents;
  }

  resetStudents() {
    this.students = [...this.students, ...this.removedStudents];
    this.removedStudents = [];
  }

  reAddStudent(student: Student) {
    this.removedStudents = this.removedStudents.filter(s => s.id !== student.id);
    this.students.push(student);
  }

  chooseRandomStudent(): Student | null {
    const eligibleStudents = this.students.filter(student => !student.hasJoker);
    if (eligibleStudents.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * eligibleStudents.length);
    return eligibleStudents[randomIndex];
  }
}
