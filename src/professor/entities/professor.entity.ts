/* eslint-disable prettier/prettier */
import { CourseSuspended } from 'src/ClasesAndInterfaces/Clases/CourseSuspended';
import { NotifySuspendedCourse } from 'src/ClasesAndInterfaces/Clases/NotifySuspendedCourse';
import { SuspendCourse } from 'src/ClasesAndInterfaces/Clases/SuspendCourse';
import { ICourseService } from 'src/ClasesAndInterfaces/Interfaces/InterfaceCourseService';
import { Courses } from 'src/courses/entities/courses.entity';
import { CRUDCoursesService } from 'src/courses/services/courses.service';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Repository, Cursor } from 'typeorm';

@Entity()
export class Professor{

    @PrimaryGeneratedColumn()
    id_Professor: number;

    @Column()
    name: string;

    @Column()
    subname: string;

    @OneToMany(() => Courses, (course)=> course.professor)
    course: Courses[];

    private courseService: ICourseService;
    getCourseService():ICourseService{
        return this.courseService
    }

    async changeCourseService(id:number, state_course: string, crud: CRUDCoursesService){
        console.log('estoy en el metodo changeCourse')
        let course: Courses = new Courses();
        course = await crud.findOneCourse(id)
        //const course: Courses = await this.coursesrepo.findOneCourse({where: {id: id}});
        //   console.log(course)
        if (state_course == 'suspend'){
            this.courseService = new NotifySuspendedCourse(new SuspendCourse());
            this.courseService.execute(course);
            //agregar logica de guardar en BD
            crud.updateCourse(id, course)
        }

        if (state_course == 'eliminate'){

        }

    }
}