import { Injectable } from '@nestjs/common';
import { course } from './interfaces/course.interface';
import { v4 as uuid } from 'uuid';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update.course.dto';
@Injectable()
export class CoursesService {
  private courses: course[] = [
    // {
    //   id: uuid(),
    //   name: 'NestJS',
    //   dificultad: 'Principiante',
    // },
    // {
    //   id: uuid(),
    //   name: 'Angular',
    //   dificultad: 'medio',
    // },
    // {
    //   id: uuid(),
    //   name: 'React',
    //   dificultad: 'avanzado',
    // },
  ];

  getAllCourses() {
    return this.courses;
  }

  getbyidCourse(id: string) {
    console.log('llego aqui');
    const course = this.courses.find((course) => course.id === id);
    return course;
  }

  create(createCourseDto: CreateCourseDto) {
    const student: course = {
      id: uuid(),
      //con este spread exparcimos el objeto de createStudentDto a la variable student que es de tipo Student
      name: createCourseDto.name,
      dificultad: createCourseDto.dificultad,
      //   body.city,
    };

    this.courses.push(student);
    return student;
  }

  update(id: string, updateCourseDto: UpdateCourseDto) {
    let courseDb = this.getbyidCourse(id);

    if (updateCourseDto.id && updateCourseDto.id !== id) {
      throw new Error('El id del body no coincide con el id de la url');
    }

    this.courses = this.courses.map((course) => {
      if (course.id === id) {
        courseDb = { ...courseDb, ...updateCourseDto, id };
      }
      return course;
    });

    return courseDb;
  }


  deleteCourse(id: string) {
    this.courses = this.courses.filter((course) => course.id !== id);
  }

  fillTeacherWithSeedData(courses: course[]) {
    this.courses = courses;
  }
}
