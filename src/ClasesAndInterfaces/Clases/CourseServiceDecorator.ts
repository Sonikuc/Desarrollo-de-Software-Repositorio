/* eslint-disable prettier/prettier */
import { Courses } from "src/courses/entities/courses.entity";
import { ICourseService } from "../Interfaces/InterfaceCourseService";

export class CourseServiceDecorator implements ICourseService{

    decorated: ICourseService;

    constructor(decorated:ICourseService){

        this.decorated = decorated;
    }

    setCourse(decorated: ICourseService):void{

        this.decorated = decorated;
    }

    getCourse(): ICourseService{

        return this.decorated;
    }

    execute(c: Courses) {

        this.getCourse().execute(c);
    }
}