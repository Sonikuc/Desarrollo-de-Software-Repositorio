import { Controller, Get, Put, Post, Delete, Param, Body } from '@nestjs/common';
import { Query } from 'typeorm/driver/Query';
import { CRUDCoursesService } from "./../services/courses.service";

@Controller('courses')
export class CoursesController {

    constructor(
        private CRUDcourseService: CRUDCoursesService
    ){}

    @Get()
    getAllCourses(){
        return this.CRUDcourseService.findAll();
    }

    @Get(':id')
    getOneCourse(@Param('id') id: number){
        return this.CRUDcourseService.findOneCourse(id);
    }

    @Post('/createcourse/:professorid')
    createCourse(@Param('professorid') id:number, @Body() body: any){
        return this.CRUDcourseService.createCourse(id,body)
    }


    @Put(':id')
    updateCourse(@Param('id') id:number, @Body() body:any){
        return this.CRUDcourseService.updateCourse(id, body)
    }

    @Delete(':id')
    deleteCourse(@Param('id') id: number){
        return this.CRUDcourseService.deleteCourse(id);
    }

    @Put(':id/suspend')
    supendCourse(@Param('id') id: number, @Body() body: any){
        this.CRUDcourseService.changeCourseState(id, body.state, this.CRUDcourseService)
    }

    @Put(':id/delete')
    deletenotifyCourse(@Param('id') id: number, @Body() body: any){
        this.CRUDcourseService.changeCourseState(id, body.state, this.CRUDcourseService)
    }

    @Put(':id/publish')
    publishCourse(@Param('id') id: number, @Body() body: any){
        return this.CRUDcourseService.coursePublished(id);

    }


}
