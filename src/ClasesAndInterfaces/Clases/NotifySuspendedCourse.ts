/* eslint-disable prettier/prettier */
import { Courses } from "src/courses/entities/courses.entity";
import { CourseServiceDecorator } from "./CourseServiceDecorator";

export class NotifySuspendedCourse extends CourseServiceDecorator{


    execute(c: Courses): void {
        console.log('estoy en notifysuspended')
        this.decorated.execute(c);
        console.log(c)
        c.notifyCourseState(c);
    }
}