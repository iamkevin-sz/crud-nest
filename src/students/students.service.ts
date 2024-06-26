import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Student } from './interfaces/student.interface';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto ';

@Injectable()
export class StudentsService {
  private students: Student[] = [
    // {
    //   id: uuid(),
    //   name: 'Kevin',
    //   city: 'Toronto',
    // },

    // {
    //   id: uuid(),
    //   name: 'John',
    //   city: 'Vancouver',
    // },

    // {
    //   id: uuid(),
    //   name: 'Mary',
    //   city: 'Calgary',
    // },
  ];

  getAllStudents() {
    return this.students;
  }

  getStudentById(id) {
    const student = this.students.find((student) => student.id === id);
    if (!student) {
      throw new NotFoundException(`No existe el estudiante con el id: ${id}`);
    }
    return student;
  }

  create(createStudentDto: CreateStudentDto) {
    const student: Student = {
      id: uuid(),
      //con este spread exparcimos el objeto de createStudentDto a la variable student que es de tipo Student
      ...createStudentDto,
    };

    this.students.push(student);
    return student;
  }

  updateStudent(id: string, updateStudentDto: UpdateStudentDto) {
    // const { name, city } = updateStudentDto;
    // const student = this.getStudentById(id);
    // student.name = name;
    // student.city = city;
    // return student;

    let studentDb = this.getStudentById(id);

    if (updateStudentDto.id && updateStudentDto.id !== id) {
      throw new Error('El id del body no coincide con el id de la url');
    }

    this.students = this.students.map((student) => {
      if (student.id === id) {
        studentDb = { ...studentDb, ...updateStudentDto, id };
      }
      return student;
    });

    return studentDb;
  }

  deteleStudent(id: string) {
    const student = this.getStudentById(id);
    this.students = this.students.filter((student) => student.id !== id);
  }


  fillStudentWithSeedData(students: Student[]) {
    this.students = students;
  }
}
