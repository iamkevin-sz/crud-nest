import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {
    private courses = [
        {
            id: 1,
            name: 'NestJS',
        },
        {
            id: 2,
            name: 'Angular',
        },
        {
            id: 3,
            name: 'React',
        },
    ]    

    getAllCourses() {
        return this.courses;
    }

    getbyidCourse(id: number) {
        console.log('llego aqui');
        const course = this.courses.find(course => course.id === id) 
        return course;
    }
    




}
