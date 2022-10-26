/* eslint-disable prettier/prettier */

import { Courses } from "src/courses/entities/courses.entity";
import { CourseServiceDecorator } from "./CourseServiceDecorator";


class NotifyEliminatedCourse extends CourseServiceDecorator {


    execute(c: Courses): void {
        
        this.getCourse().execute(c);

        c.notifyCourseState(c.getCourseState());
    }

}
