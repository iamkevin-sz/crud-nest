import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update.course.dto';
import { IsUUID } from 'class-validator';

@Controller('courses')
export class CoursesController {

    constructor(

        private readonly coursesService:CoursesService
        
    ) {}
    @Get()
    getAllCourses() {
        return this.coursesService.getAllCourses();
    }

    @Get(':id')
    getbyidCourse(@Param('id', ParseUUIDPipe) id: string) {
        console.log({id});
        return this.coursesService.getbyidCourse(id);

    }
    // para recibir el body de la peticion por post se pone el decorador @Body, y a lado se pone el body de la peticion y any es el tipo de dato que va a retornar la peticion
    // en este caso el body va a ser de tipo any ya que no sabemos que es lo que esta mandando el usuario en el body por post en este caso
    @Post()
    createCourse(@Body() createCourseDto: CreateCourseDto) {
        return this.coursesService.create(createCourseDto);

    }

    @Patch(':id')
    updateCourse(   
            @Param('id', ParseUUIDPipe) id: string, 
            @Body() updateCourseDto : UpdateCourseDto ) {
        return this.coursesService.update(id, updateCourseDto);
    }

    

    @Delete(':id')
    DeleteCourse( @Param('id', ParseUUIDPipe) id: string) {
        this.coursesService.deleteCourse(id);
        
    }




}
