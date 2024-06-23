import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentsService {
  private students = [
    {
      id: 1,
      name: 'Kevin',
      city: 'Toronto',
    },

    {
      id: 2,
      name: 'John',
      city: 'Vancouver',
    },

    {
      id: 3,
      name: 'Mary',
      city: 'Calgary',
    },
  ];

  getAllStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student) {
      throw new NotFoundException(`No existe el estudiante con el id: ${id}`);
    }
    return student;
  }
  
}
