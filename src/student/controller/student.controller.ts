/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from 'src/student/services/student.service';

@Controller('student')
export class StudentController {

    constructor(

        private studentService: StudentService
    ){}

    @Get()
    getAll(){
        return this.studentService.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id:number){

        return this.studentService.findOne(id);
    }

    @Post()
    create(@Body() body: any){

        return this.studentService.create(body);
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() body:any){

        return this.studentService.update(id,body);
    }

    @Delete(':id')
    delete(@Param('id') id:number){

        return this.studentService.delete(id);
    }
}
