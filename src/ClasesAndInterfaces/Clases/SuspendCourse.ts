/* eslint-disable prettier/prettier */
import { Courses } from "src/courses/entities/courses.entity";
import { ICourseService } from "../Interfaces/InterfaceCourseService";
import { CourseSuspended } from "./CourseSuspended";

export class SuspendCourse implements ICourseService{

    execute(c: Courses): void {
        console.log('estoy en suspended')
        c.transitionTo(new CourseSuspended());
    }
}