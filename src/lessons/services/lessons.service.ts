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
    //let course = this.coursesrepo.findOne({where:{id: id_course}});
    const qb = await this.lessonsrepo.createQueryBuilder("lessons").where("lessons.course_id = :id_course").setParameter('id_course', id_course).getMany();
    return qb;    
  }

  async findOneLesson(id_lesson:number, id_course:number){
 //   let course = this.coursesrepo.findOne({where:{id: id_course}});
    const qb:Lessons = await this.lessonsrepo.createQueryBuilder("lessons").where("lessons.course_id = :id_course and lessons.id = :id_lesson").setParameters({id_course,id_lesson}).getOne();
    return qb
  }

  async updateLesson(id_lesson:number, id_course:number, body:any){
    const lesson:Lessons = await this.findOneLesson(id_lesson,id_course);
    const qb = this.lessonsrepo.merge(lesson, body);
    console.log(qb)
    return (this.lessonsrepo.save(lesson));
  }

  async deleteLesson (id_lesson:number, id_course:number){
    const lesson:Lessons = await this.findOneLesson(id_lesson,id_course);
    await this.lessonsrepo.delete(lesson.id);
    return ('Leccion: ' + lesson.tittle +  ' eliminada')
  }


}
