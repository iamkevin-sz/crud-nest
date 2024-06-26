import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { ParseIntPipe } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto ';

@Controller('students')
// @UsePipes(ValidationPipe)
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  getAllStudents() {
    return this.studentsService.getAllStudents();
  }

  @Get(':id')
  getStudentById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    console.log({ id });
    return this.studentsService.getStudentById(id);
  }

  @Post()
  // @UsePipes(ValidationPipe)
  createStudent(@Body() createStudentDto: CreateStudentDto) {
    console.log(createStudentDto);
    return this.studentsService.create(createStudentDto);
  }

  @Patch(':id')
  updateStudent(@Param('id', ParseUUIDPipe) id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentsService.updateStudent(id, updateStudentDto);
  }

  @Delete(':id')
  deleteStudent(@Param('id', ParseUUIDPipe) id: string) {
    console.log('soy delete', id);
    return this.studentsService.deteleStudent(id);
  }
}
