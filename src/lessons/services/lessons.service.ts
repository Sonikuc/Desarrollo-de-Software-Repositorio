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

   async findAllLessons(id_course: number){
    const qb = this.lessonsrepo.createQueryBuilder("lessons")
    //REVISAR ESTA PARTE, EN EL QUERY EL PARAMETRO LLEGA COMO UN $1 o $2
    qb.select("*").where("lessons.course_id = :id_course").setParameters({id_course})
    console.log(qb.getSql())
    return await qb.getRawMany();
   }

}
