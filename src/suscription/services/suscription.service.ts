import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Courses } from 'src/courses/entities/courses.entity';
import { Student } from 'src/student/entities/student.entity';
import { Repository } from 'typeorm';
import { Suscription } from '../entities/suscription.entity';

@Injectable()
export class SuscriptionService {

    constructor(@InjectRepository(Courses) private coursesrepo: Repository<Courses>,
    @InjectRepository(Suscription) private suscriptionrepo: Repository<Suscription>,
    @InjectRepository(Student) private studentrepo: Repository<Student>
    ){}

    async createSuscription(id_student:number, id_course: number){        
        const newSuscription: Suscription = this.suscriptionrepo.create();
        const newStudent: Student = await this.studentrepo.findOne({where: {id_Student: id_student}});
        const newCourse: Courses = await this.coursesrepo.findOne({where: {id: id_course}});
        newSuscription.student = newStudent;
        newSuscription.course = newCourse;

        return (this.suscriptionrepo.save(newSuscription))
    }

    async deleteSuscription(id_course:number, id_student:number){
        const qb = await this.suscriptionrepo.createQueryBuilder("suscription").where("suscription.course_id = :id_course and suscription.student_id =:id_student").setParameters({id_course,id_student}).getOne();
        console.log(qb)
    }
}
