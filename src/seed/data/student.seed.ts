import { course } from "src/courses/interfaces/course.interface";
import { Student } from "src/students/interfaces/student.interface";
import { v4 as uuid } from 'uuid';
export const STUDENT_SEED: Student[] = [
    {
        id: uuid(),
        name: 'kevin',
        city: 'sucre',
    },
    {
        id: uuid(),
        name: 'jherson',
        city: 'sucre',
    },
    {
        id: uuid(),
        name: 'Marioly',
        city: 'sucre',
    },
]