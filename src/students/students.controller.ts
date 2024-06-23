import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StudentsService } from './students.service';
import { ParseIntPipe } from '@nestjs/common';

@Controller('students')
export class StudentsController {

    constructor(
        private readonly studentsService:StudentsService
    ){}
 

    @Get()
    getAllStudents() {
        return this.studentsService.getAllStudents()
    }

        @Get(':id')
        getStudentById(@Param('id', ParseIntPipe ) id:number) {
        console.log({id});
            return this.studentsService.getStudentById(+id)
    }

    @Post()
    createStudent(@Body() body: any) {
        return body;
    }

    @Patch(':id')
    updateStudent(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: any)
       {
        return body;
    }

    @Delete(':id')
    deleteStudent(@Param('id', ParseIntPipe) id: number) {
        return {
            method : 'delete',
            id
        };
    }

}
