/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Courses } from 'src/courses/entities/courses.entity';
import { ProfessorService } from '../services/professor.service';



@Controller('professor')
export class ProfessorController {

    constructor(

        private professorService: ProfessorService
    ){}

    @Get()
    getAll(){
        return this.professorService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id:number){

        return this.professorService.findOne(id);
    }

    @Post()
    create(@Body() body: any){

        return this.professorService.create(body);
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() body:any){

        return this.professorService.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id:number){

        return this.professorService.delete(id);
    }

 /*   @Put('/course/:id/suspend')
    supendCourse(@Param('id') id: number, @Body() body: any){
        this.professorService.suspendCourse(id,body.state)
    }
    */
}
