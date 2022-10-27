/* eslint-disable prettier/prettier */
import { Courses } from 'src/courses/entities/courses.entity';
import { ICourseService } from '../Interfaces/InterfaceCourseService'
import { CourseEliminated } from './CourseEliminated';


export class DeleteCourse implements ICourseService{

    execute(c: Courses): void {
        
        c.transitionTodelete(new CourseEliminated());
    }
}