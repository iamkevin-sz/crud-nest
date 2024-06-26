import { Injectable } from '@nestjs/common';
import { COURSE_SEED } from './data/course.seed';
import { TEACHERS_SEED } from './data/teacher.seed';
import { STUDENT_SEED } from './data/student.seed';
import { CoursesService } from 'src/courses/courses.service';
import { TeachersService } from 'src/teachers/teachers.service';
import { StudentsService } from 'src/students/students.service';


@Injectable()
export class SeedService {

  constructor(

    private readonly coursesService: CoursesService,
    private readonly teacherService: TeachersService,
    private readonly studentService: StudentsService

  ) {}
  populateDB() {
    // COURSE_SEED
    // TEACHERS_SEED
    // STUDENT_SEED
    this.coursesService.fillTeacherWithSeedData(COURSE_SEED);
    this.teacherService.fillTeacherWithSeedData(TEACHERS_SEED);
    this.studentService.fillStudentWithSeedData(STUDENT_SEED);
    
    return 'seed executed with success';
  }
}
