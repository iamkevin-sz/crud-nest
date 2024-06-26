import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './entities/teacher.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TeachersService {
  private teachers: Teacher[] = [
    // {
    //   id: uuid(),
    //   name: 'Kevin',
    //   direccion: 'Toronto',
    //   createdAt: new Date().getTime(),
    // },

    // {
    //   id: uuid(),
    //   name: 'jherson',
    //   direccion: 'vaca guzman',
    //   createdAt: new Date().getTime(),
    // },

    // {
    //   id: uuid(),
    //   name: 'Marioly',
    //   direccion: 'Recoleta',
    //   createdAt: new Date().getTime(),
    // },
  ];
  create(createTeacherDto: CreateTeacherDto) {
    const { name, direccion } = createTeacherDto;
    const teacher: Teacher = {
      id: uuid(),
      name,
      direccion,
      createdAt: new Date().getTime(),
    };
    this.teachers.push(teacher);
    return teacher;
  }

  findAll() {
    return this.teachers;
  }

  findOne(id: string) {
    const teacher = this.teachers.find((teacher) => teacher.id === id);
    if (!teacher) {
      throw new NotFoundException(`No existe el profesador con el id: ${id}`);
    }
    return teacher;
  }

  update(id: string, updateTeacherDto: UpdateTeacherDto) {

    const teacher = this.findOne(id);
    const { name, direccion } = updateTeacherDto;
    teacher.name = name;
    teacher.direccion = direccion;
    return teacher;
  }

  remove(id: string) {
    this.teachers = this.teachers.filter((teacher) => teacher.id !== id);
    return this.teachers;
  }

  fillTeacherWithSeedData(teachers: Teacher[]) {
    this.teachers = teachers;
  }

}
