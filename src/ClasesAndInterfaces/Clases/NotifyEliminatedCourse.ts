/* eslint-disable prettier/prettier */

import { Courses } from "src/courses/entities/courses.entity";
import { CourseServiceDecorator } from "./CourseServiceDecorator";


export class NotifyEliminatedCourse extends CourseServiceDecorator {


    execute(c: Courses): void {
        
        this.decorated.execute(c);

        c.notifyCourseState(c);
    }

}
