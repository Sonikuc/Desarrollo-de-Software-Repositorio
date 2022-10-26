import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Courses } from 'src/courses/entities/courses.entity';
import { Repository } from 'typeorm';
import { Lessons } from '../entities/lessons.entity';


@Injectable()
export class LessonsService {

    constructor(@InjectRepository(Lessons) private lessonsrepo: Repository<Lessons>,
    @InjectRepository(Courses) private coursesrepo: Repository<Courses>
    ){}

   async addLesson(data: Lessons, course_id:number){
        const course = await this.coursesrepo.findOne({where: {id: course_id}});
        if (!course){
            throw new Notification ('Curso no encontrado')
        }
        const newLesson = new Lessons();
        newLesson.id = data.id;
        newLesson.tittle = data.tittle;
        newLesson.duration = data.duration;
        newLesson.link = data.link;
        newLesson.course = course;
        return this.lessonsrepo.save(newLesson);
   }

   async findAllLessons(id_course:number){
    let course = this.coursesrepo.findOne({where:{id: id_course}});
    const qb = await this.lessonsrepo.createQueryBuilder("lessons").where("lessons.course_id = :id_course").setParameter('id_course', id_course).getMany();
    return qb;    
  }

  async findOneLesson(id_course:number){

  }


}
