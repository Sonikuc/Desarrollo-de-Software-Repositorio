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

    async deleteSuscription(id_student:number, id_course: number){
        
        const qb = await this.suscriptionrepo.createQueryBuilder("suscripcion").where("suscripcion.course_id = :id_course and suscripcion.student_id =:id_student").setParameters({id_course,id_student}).getOne();
        await this.suscriptionrepo.delete(qb.id);
        return ('La Suscripcion. Con estudiante: ' + id_student + ' Y Curso ' + id_course + ' ha sido Eliminada')

    }




}
