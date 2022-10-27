import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoursePublished } from 'src/ClasesAndInterfaces/Clases/CoursePublished';
import { NotifySuspendedCourse } from 'src/ClasesAndInterfaces/Clases/NotifySuspendedCourse';
import { SuspendCourse } from 'src/ClasesAndInterfaces/Clases/SuspendCourse';
import { Lessons } from 'src/lessons/entities/lessons.entity';
import { Professor } from 'src/professor/entities/professor.entity';
import { Suscription } from 'src/suscription/entities/suscription.entity';
import { Repository } from 'typeorm';
import { Courses } from './../entities/courses.entity';


@Injectable()
export class CRUDCoursesService {
    constructor(@InjectRepository(Courses) private coursesrepo: Repository<Courses>,
    @InjectRepository(Professor) private profrepo: Repository<Professor>,
    @InjectRepository(Suscription) private suscriptionrepo: Repository<Suscription>,
    @InjectRepository(Lessons) private lessonrepo: Repository<Lessons>,
    private professor: Professor
    ){}

    async findAll(){
        const qb:Courses[] = await this.coursesrepo.find(//{
         //   relations: ['lessons'],
        /*}*/);
        console.log(qb)
      return  qb
    }

    async findOneCourse(id_course: number){

        const course: Courses = await this.coursesrepo.findOne({where: {id: id_course}});

        const qb2: Suscription[] = await this.suscriptionrepo.find({
               relations: ['student'],
        })
        

        const qb3: Lessons[] = await this.lessonrepo.createQueryBuilder("lessons").where("lessons.course_id = :id_course").setParameter('id_course', id_course).getMany();


        if (qb3 == null){

        }

        for (let i of qb2){
            course.addObserver(i.student);
        }   
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

    changeCourseState(id:number, state_course: string, crud: CRUDCoursesService){

        this.professor.changeCourseService(id,state_course,crud)
    }

    async coursePublished(id_c: number){
        const course: Courses = await this.coursesrepo.findOne({where: {id: id_c}});
        let qb3 = await this.lessonrepo.createQueryBuilder("lessons").where("lessons.course_id = :id_course").setParameter('id_course', id_c).getMany();
        if (qb3[1] == undefined){
            return ('Debe tener al menos una leccion para publicar')
        }
        else{
            course.courseState = new CoursePublished();
            course.state = "published"
            console.log(course)
            this.coursesrepo.save(course)
            return ('Curso Publicado con exito')
        }
    }

    deletenotifyCourse(id: number, body:any, crud: CRUDCoursesService){
        this.professor.changeCourseService(id, body.state, crud)
    }

}
