import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Courses } from './../entities/courses.entity';


@Injectable()
export class CRUDCoursesService {
    constructor(@InjectRepository(Courses) private coursesrepo: Repository<Courses>
    ){}

    findAll(){
      return  this.coursesrepo.find({
        relations: ['lessons'],
    });
    }

    findOne(id_course: number){
        return this.coursesrepo.findOne({where: {id: id_course}});
    }

    createCourse(body: Courses){
        const newCourse: Courses = this.coursesrepo.create(body);
        return (this.coursesrepo.save(newCourse))
    }

    async updateCourse (id_course: number, body: Courses){
        const course = await this.coursesrepo.findOne({where: {id: id_course}});
        this.coursesrepo.merge(course, body);
        return (this.coursesrepo.save(course));
    }

    async deleteCourse (id_course: number){
        await this.coursesrepo.delete(id_course);
        return ('Curso ' + id_course + ' Eliminado')
    } 
}
