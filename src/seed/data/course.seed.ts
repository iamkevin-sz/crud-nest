import { course } from "src/courses/interfaces/course.interface";
import { v4 as uuid } from 'uuid';
export const COURSE_SEED: course[] = [
    {
        id: uuid(),
        name: 'c++',
        dificultad: 'facil',
    },
    {
        id: uuid(),
        name: 'java',
        dificultad: 'medio',
    },
    {
        id: uuid(),
        name: 'javascript',
        dificultad: 'dificil',
    },
]