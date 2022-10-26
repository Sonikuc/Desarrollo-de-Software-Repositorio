import { Controller, Post, Body, Param, Get, Delete, Put } from '@nestjs/common';
import { Lessons } from '../entities/lessons.entity';
import { LessonsService } from '../services/lessons.service';

@Controller('lessons')
export class LessonsController {

    constructor(private lessonService: LessonsService){
    }
//listo
    @Post('courses/:courseid')
    addLesson(@Param('courseid') id: number, @Body() body: Lessons){
        console.log(id)
        return this.lessonService.addLesson(body,id);
    }
//listo
    @Get('courses/:courseid')
    getAllLessons(@Param('courseid') id: number){
        return this.lessonService.findAllLessons(id);
    }
//listo
    @Get(':lessonid/courses/:courseid')
    getOneLesson(@Param('lessonid') lessonid:number, @Param('courseid') courseid:number){
        return this.lessonService.findOneLesson(lessonid,courseid);
    }
//listo
    @Put(':lessonid/courses/:courseid')
    updateLesson(@Param('lessonid') lessonid:number, @Param('courseid') courseid:number, @Body() body:any){
        return this.lessonService.updateLesson(lessonid, courseid, body);
    }
//listo
    @Delete(':lessonid/courses/:courseid')
    deleteLesson(@Param('lessonid') lessonid:number, @Param('courseid') courseid:number){
        return this.lessonService.deleteLesson(lessonid, courseid);
    }
}
