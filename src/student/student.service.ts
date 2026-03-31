import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'Fawza', age: 20 },
    { id: 2, name: 'Arfin', age: 21 },
    { id: 3, name: 'Takiya', age: 22 },
    { id: 4, name: 'Dilruba', age: 20 },
    { id: 5, name: 'Arifa Ratri', age: 21 },
    { id: 6, name: 'Takiya bristy', age: 22 },
  ];

  getAllStudents() {
    return this.students;
  }

  getById(id: number) {
    return this.students.find((student) => student.id === id);
  }

  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(id: number, data: { name: string; age: number }) {
    console.log(id, 'id');

    const student = this.students.find((st) => st.id === id);
    console.log(student, 'rfrfrf');

    if (!student) {
      return new NotFoundException(`Student with id ${id} not found`);
    }
    Object.assign(student, data);
    return student;
  }

  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    console.log(id);

    const student = this.getById(id);
    console.log(student);

    if (!student) {
      return new NotFoundException('stundent not found');
    }
    Object.assign(student, data);
    return student;
  }

  deleteStudent(id: number) {
    const student = this.getById(id);
    if (!student) {
      return new NotFoundException('stundent not found');
    }

    const deleted = this.students.splice(
      this.students.findIndex((st) => st.id === id),
      1,
    );
    return deleted;
  }
}
