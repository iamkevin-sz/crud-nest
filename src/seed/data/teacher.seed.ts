import { Teacher } from "src/teachers/entities/teacher.entity";
import { v4 as uuid } from 'uuid';
export const TEACHERS_SEED: Teacher[] = [
    {
        id: uuid(),
        name: 'kevin',
        direccion: 'Toronto',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'jherson',
        direccion: 'vaca guzman',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Marioly',
        direccion: 'Recoleta',
        createdAt: new Date().getTime(),
    },
]