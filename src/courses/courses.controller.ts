import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';

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
    getbyidCourse(@Param('id', ParseIntPipe) id: number) {
        console.log({id});
        return this.coursesService.getbyidCourse(id);

    }
    // para recibir el body de la peticion por post se pone el decorador @Body, y a lado se pone el body de la peticion y any es el tipo de dato que va a retornar la peticion
    // en este caso el body va a ser de tipo any ya que no sabemos que es lo que esta mandando el usuario en el body por post en este caso
    @Post()
    createCourse(@Body() body: any) {
        return body;

    }

    @Patch(':id')
    updateCourse(   
            @Param('id', ParseIntPipe) id: number, 
            @Body() body: any) {
        return body;
    }
    @Delete(':id')
    DeleteCourse( @Param('id', ParseIntPipe) id: number) {
        return {
            method : 'delete',
            id
        };
    }




}
