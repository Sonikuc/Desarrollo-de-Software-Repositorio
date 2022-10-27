import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Professor } from 'src/professor/entities/professor.entity';
import { Suscription } from 'src/suscription/entities/suscription.entity';
import { Repository } from 'typeorm';
import { Courses } from './../entities/courses.entity';


@Injectable()
export class CRUDCoursesService {
    constructor(@InjectRepository(Courses) private coursesrepo: Repository<Courses>,
    @InjectRepository(Professor) private profrepo: Repository<Professor>,
    @InjectRepository(Suscription) private suscriptionrepo: Repository<Suscription>
    ){}

    async findAll(){
        const qb:Courses[] = await this.coursesrepo.find(//{
         //   relations: ['lessons'],
        /*}*/);
        console.log(qb)
      return  qb
    }

    async findOne(id_course: number){

        const course: Courses = await this.coursesrepo.findOne({where: {id: id_course}});

        const qb2: Suscription[] = await this.suscriptionrepo.find({
               relations: ['student'],
        })

        for (let i of qb2){
          //  course.Observers.push(i.student)

        }

        

        console.log(qb2)

        return course
    }

    async createCourse(id_professor: number, body: Courses){        
        const newCourse: Courses = this.coursesrepo.create(body);
        const professor:Professor = await this.profrepo.findOne({where: {id_Professor: id_professor}})
        newCourse.professor = professor;
        newCourse.category = body.category;
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
